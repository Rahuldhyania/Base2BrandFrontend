"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Swal from "sweetalert2";
import { useRouter, useParams } from "next/navigation";
import Sidebar from "../../sidebar";

const QUILL_MODULES = {
    toolbar: [
        // [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'color': [] }],
        // [{ 'list': 'ordered' }, { 'list': 'bullet' },
        // { 'indent': '-1' }, { 'indent': '+1' }],
        // ['link', 'image', 'video'],
        ['clean']
    ],
};

const QUILL_FORMATS = [
    // 'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'color'
    // 'list', 'bullet', 'indent',
    // 'link', 'image', 'video'
];

const initialFormData = {
    pageSlug: "",
    pageName: "",
    seoPageTitle: "",
    pageKeywords: "",
    status: true,

    heroSection: {
        title: "",
        subtitle: "",
        description: "",
        backgroundImage: null as File | string | null,
        topImage: null as File | string | null,
    },

    aboutSection: {
        title: "",
        description: "",
        image: null as File | string | null,
    },

    challengesSection: {
        title: "",
        description: "",
        items: [
            {
                uid: "seed-0",
                heading: "",
                challenge: "",
                solution: "",
                tab_image: null as File | string | null,
            },
        ],
    },

    processSection: {
        title: "",
        subtitle: "",
        steps: [
            {
                uid: "seed-0",
                title: "",
                description: "",
            },
        ],
    },
    testimonialsSection:
        [
            {
                name: "",
                testimonial: "",
            },
        ],
    faqSection: [
        {
            uid: "faq-seed-0",
            question: "",
            answer: "",
            order: 1,
        },
    ],
};


const Page = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<any>(initialFormData);
    const params = useParams(); // Next.js 13+ hook
    const id = params?.id;
    console.log(formData?.testimonialsSection, "--------formData?.testimonialsSection---------");
    // Generic handler for top-level fields
    const handleFieldChange = (field: string, value: any) => {
        setFormData((prev: any) => ({
            ...prev,
            [field]: value,
        }));
    };
    // Handler for nested objects/arrays
    const handleNestedChange = (section: string, field: string, value: any) => {
        setFormData((prev: any) => ({
            ...prev,
            [section]: { ...prev[section], [field]: value },
        }));
    };

    useEffect(() => {
        if (id) {
            axios
                .get(`https://adminbackend.base2brand.com/api/B2Badmin/page/${id}`)
                .then((res) => {
                    if (res.data?.data) {
                        const incoming = res.data.data;
                        // assign stable uids to lists for keying
                        const withUids = {
                            ...incoming,
                            challengesSection: {
                                ...incoming.challengesSection,
                                items: (incoming.challengesSection?.items || []).map((it: any, i: number) => ({ ...it, uid: it.uid || `ch-${i}-${Date.now()}` }))
                            },
                            processSection: {
                                ...incoming.processSection,
                                steps: (incoming.processSection?.steps || []).map((st: any, i: number) => ({ ...st, uid: st.uid || `st-${i}-${Date.now()}` }))
                            },
                          
                        };
                        setFormData(withUids);
                    }
                })
                .catch((err) => {
                    console.error("Error fetching page:", err);
                    Swal.fire("Error", "Failed to fetch page details", "error");
                });
        }
    }, [id]);
    // Save handler
    const handleSave = async () => {
        try {

            if (!formData.pageSlug.trim()) {
                Swal.fire("Validation Error", "Page Slug is required", "warning");
                return;
            }

            if (!formData.pageName.trim()) {
                Swal.fire("Validation Error", "Page Name is required", "warning");
                return;
            }

            // Build multipart form data for update
            const form = new FormData();

            // Build payload mirroring create structure, but for update
            const payload: any = {
                pageSlug: formData.pageSlug || "",
                pageName: formData.pageName || "",
                seoPageTitle: formData.seoPageTitle || "",
                pageKeywords: formData.pageKeywords || "",
                status: Boolean(formData.status),

                heroSection: {
                    title: formData.heroSection?.title || "",
                    subtitle: formData.heroSection?.subtitle || "",
                    description: formData.heroSection?.description || "",
                    backgroundImage: typeof formData.heroSection?.backgroundImage === 'string' ? formData.heroSection.backgroundImage : undefined,
                    topImage: typeof formData.heroSection?.topImage === 'string' ? formData.heroSection.topImage : undefined,
                },

                aboutSection: {
                    title: formData.aboutSection?.title || "",
                    description: formData.aboutSection?.description || "",
                    image: typeof formData.aboutSection?.image === 'string' ? formData.aboutSection.image : undefined,
                },

                challengesSection: {
                    title: formData.challengesSection?.title || "",
                    description: formData.challengesSection?.description || "",
                    items: Array.isArray(formData.challengesSection?.items)
                        ? formData.challengesSection.items.map((it: any) => ({
                            challenge: it.challenge_des || it.challenge || "",
                            solution: it.solution_des || it.solution || "",
                            heading: it.heading || undefined,
                            tab_image: typeof it.tab_image === 'string' ? it.tab_image : undefined,
                        })) : [],
                },

                processSection: {
                    title: formData.processSection?.title || "",
                    subtitle: formData.processSection?.subtitle || "",
                    steps: Array.isArray(formData.processSection?.steps)
                        ? formData.processSection.steps.map((st: any, index: number) => ({
                            stepNumber: st.stepNumber ?? index + 1,
                            title: st.title || "",
                            description: st.description || "",
                        })) : [],
                },

                testimonialsSection: Array.isArray(formData.testimonialsSection)
                    ? formData.testimonialsSection.map((t: any) => ({ name: t.name || "", testimonial: t.testimonial || "" })) : [],

                faqSection: Array.isArray(formData.faqSection?.faqs)
                    ? formData.faqSection.faqs.map((f: any, index: number) => ({
                        question: f.question || "",
                        answer: f.answer || "",
                        order: f.order ?? index + 1
                    })) : [],
            };

            // Collect files
            const files: { key: string, file: File }[] = [];
            if (formData.heroSection.backgroundImage instanceof File) {
                files.push({ key: 'heroSection.backgroundImage', file: formData.heroSection.backgroundImage });
                payload.heroSection.backgroundImage = undefined;
            }
            if (formData.heroSection.topImage instanceof File) {
                files.push({ key: 'heroSection.topImage', file: formData.heroSection.topImage });
                payload.heroSection.topImage = undefined;
            }
            if (formData.aboutSection.image instanceof File) {
                files.push({ key: 'aboutSection.image', file: formData.aboutSection.image });
                payload.aboutSection.image = undefined;
            }
            if (Array.isArray(formData.challengesSection.items)) {
                payload.challengesSection.items = payload.challengesSection.items.map((it: any, index: number) => {
                    const copy = { ...it };
                    const src = formData.challengesSection.items[index];
                    if (src?.tab_image instanceof File) {
                        files.push({ key: `challengesSection.items[${index}].tab_image`, file: src.tab_image });
                        copy.tab_image = undefined;
                    }
                    return copy;
                });
            }

            // Append JSON payload first
            form.append('updatePagePayload', JSON.stringify(payload));
            // Fallback fields
            if (payload.pageName) form.append('pageName', payload.pageName);
            if (payload.pageSlug) form.append('pageSlug', payload.pageSlug);

            // Map files to backend-expected names
            files.forEach(({ key, file }) => {
                if (key === 'heroSection.backgroundImage') {
                    form.append('heroBackground', file);
                } else if (key === 'aboutSection.image') {
                    form.append('aboutImage', file);
                } else if (key.startsWith('challengesSection.items[') && key.endsWith('].tab_image')) {
                    const match = key.match(/challengesSection\.items\[(\d+)\]\.tab_image/);
                    const index = match ? match[1] : undefined;
                    const fieldName = typeof index !== 'undefined' ? `tab_image_${index}` : 'tab_image';
                    form.append(fieldName, file);
                } else if (key === 'heroSection.topImage') {
                    form.append('topImage', file);
                } else {
                    form.append(key, file);
                }
            });

            if (id) {
                await axios.put(
                    `https://adminbackend.base2brand.com/api/B2Badmin/page/update/${id}`,
                    form
                );
                Swal.fire("Success", "Page updated successfully!", "success");
            }

            router.push("/admin/adminPages");
        } catch (error: any) {
            Swal.fire("Error", error.message, "error");
        }
    };


    return (
        <div className="sidebar__with__data">
            <div className="side__bar">
                <Sidebar />
            </div>
            <div className="container">
                <div className="bg__heading_admin p-3 mb-4">
                    <h2 className="title mb-0">Create New Page</h2>
                </div>

                <div className="card shadow-sm mb-4">
                    <div className="card-header bg-primary text-white">
                        <h5 className="mb-0">Basic Information</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Page Name *</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Page Name"
                                    value={formData.pageName}
                                    onChange={e => handleFieldChange("pageName", e.target.value)}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Page Slug *</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Page Slug"
                                    value={formData.pageSlug}
                                    onChange={e => handleFieldChange("pageSlug", e.target.value)}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">SEO Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="SEO Title"
                                    value={formData.seoPageTitle}
                                    onChange={e => handleFieldChange("seoPageTitle", e.target.value)}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Keywords</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Keywords"
                                    value={formData.pageKeywords}
                                    onChange={e => handleFieldChange("pageKeywords", e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Section */}
                <div className="card shadow-sm mb-4">
                    <div className="card-header bg-info text-white">
                        <h5 className="mb-0">Hero Section</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Hero Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Hero Title"
                                    value={formData.heroSection.title}
                                    onChange={e => handleNestedChange("heroSection", "title", e.target.value)}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Hero Subtitle</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Hero Subtitle"
                                    value={formData.heroSection.subtitle}
                                    onChange={e => handleNestedChange("heroSection", "subtitle", e.target.value)}
                                />
                            </div>
                            <div className="col-12 mb-3">
                                <label className="form-label">Hero Description</label>
                                <ReactQuill
                                    value={formData.heroSection.description}
                                    onChange={val => handleNestedChange("heroSection", "description", val)}
                                    modules={QUILL_MODULES}
                                    formats={QUILL_FORMATS}
                                />
                            </div>

                            <div className="col-12 mb-3">
                                <label className="form-label">Background Image</label>
                                <input
                                    className="form-control"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            handleNestedChange("heroSection", "backgroundImage", file);
                                        }
                                    }}
                                />
                                {formData.heroSection.backgroundImage && (
                                    <img
                                        src={typeof formData.heroSection.backgroundImage === 'string' ? formData.heroSection.backgroundImage as string : URL.createObjectURL(formData.heroSection.backgroundImage as File)}
                                        alt="Preview"
                                        className="img-thumbnail mt-2"
                                        style={{ width: "150px" }}
                                    />
                                )}
                            </div>

                            <div className="col-12 mb-3">
                                <label className="form-label">Top Image</label>
                                <input
                                    className="form-control"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            handleNestedChange("heroSection", "topImage", file);
                                        }
                                    }}
                                />
                                {formData.heroSection.topImage && (
                                    <img
                                        src={typeof formData.heroSection.topImage === 'string' ? formData.heroSection.topImage as string : URL.createObjectURL(formData.heroSection.topImage as File)}
                                        alt="Preview"
                                        className="img-thumbnail mt-2"
                                        style={{ width: "150px" }}
                                    />
                                )}
                            </div>


                        </div>
                    </div>
                </div>

                {/* About Section */}
                <div className="card shadow-sm mb-4">
                    <div className="card-header bg-success text-white">
                        <h5 className="mb-0">About Section</h5>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12 mb-3">
                                <label className="form-label">About Title</label>
                                <ReactQuill
                                    value={formData.aboutSection.title}
                                    onChange={val => handleNestedChange("aboutSection", "title", val)}
                                    modules={QUILL_MODULES}
                                    formats={QUILL_FORMATS}
                                />
                            </div>
                            <div className="col-12 mb-3">
                                <label className="form-label">About Description</label>
                                <ReactQuill
                                    value={formData.aboutSection.description}
                                    onChange={val => handleNestedChange("aboutSection", "description", val)}
                                    modules={QUILL_MODULES}
                                    formats={QUILL_FORMATS}
                                />
                            </div>

                            <div className="col-12 mb-3">
                                <label className="form-label">Image</label>
                                <input
                                    className="form-control"
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            handleNestedChange("aboutSection", "image", file);
                                        }
                                    }}
                                />
                                {formData.aboutSection.image && (
                                    <img
                                        src={typeof formData.aboutSection.image === 'string' ? formData.aboutSection.image as string : URL.createObjectURL(formData.aboutSection.image as File)}
                                        alt="Preview"
                                        className="img-thumbnail mt-2"
                                        style={{ width: "150px" }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>



                {/* Challenges Section */}
                <div className="card shadow-sm mb-4">
                    <div className="card-header bg-info text-white d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Challenges Section</h5>
                    </div>
                    <div className="card-body">
                        <div className="row mb-3">
                            <div className="col-md-12">
                                <label className="form-label">Challenges Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Challenges Title"
                                    value={formData.challengesSection.title}
                                    onChange={e => handleNestedChange("challengesSection", "title", e.target.value)}
                                />
                            </div>
                            <div className="col-12 mb-3">
                                <label className="form-label">Challenges Description</label>
                                <ReactQuill
                                    value={formData.challengesSection.description}
                                    onChange={val => handleNestedChange("challengesSection", "description", val)}
                                    modules={QUILL_MODULES}
                                    formats={QUILL_FORMATS}
                                />
                            </div>
                        </div>

                        <div className="col-12">
                            {formData?.challengesSection?.items.map((item: any, idx: number) => (
                                <div key={item.uid || idx} className="card mb-3">
                                    <div className="card-header d-flex justify-content-between align-items-center">
                                        <span>Challenge #{idx + 1}</span>
                                        <button
                                            className="btn btn-sm btn-danger"
                                            type="button"
                                            onClick={() => {
                                                // Prevent deletion if only one challenge remains
                                                if (formData.challengesSection.items.length <= 1) {
                                                    Swal.fire("Cannot Delete", "You must have at least one challenge item.", "warning");
                                                    return;
                                                }

                                                const items = formData.challengesSection.items.filter((_: any, i: number) => i !== idx);
                                                setFormData((prev: any) => ({
                                                    ...prev,
                                                    challengesSection: { ...prev.challengesSection, items },
                                                }));
                                            }}
                                            disabled={formData.challengesSection.items.length <= 1}
                                        >
                                            Remove Challenge
                                        </button>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                             <div className="col-md-12 mb-3">
                                                <label className="form-label">Tab Heading</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="e.g., Low Conversion Rates"
                                                    value={item.heading}
                                                    onChange={e => {
                                                    const items = [...formData.challengesSection.items];
                                                    items[idx].heading = e.target.value;
                                                    setFormData(prev => ({
                                                        ...prev,
                                                        challengesSection: { ...prev.challengesSection, items },
                                                    }));
                                                    }}
                                                />
                                            </div>
                                            <div className="col-md-12 mb-3">
                                                <label className="form-label">Challenge Description</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="e.g., Low Conversion Rates"
                                                    value={item.challenge}
                                                    onChange={e => {
                                                        const items = [...formData.challengesSection.items];
                                                        items[idx].challenge = e.target.value;
                                                        setFormData((prev: any) => ({
                                                            ...prev,
                                                            challengesSection: { ...prev.challengesSection, items },
                                                        }));
                                                    }}
                                                />
                                            </div>
                                            <div className="col-md-12 mb-3">
                                                <label className="form-label">Solution Description</label>
                                                <ReactQuill
                                                    theme="snow"
                                                    value={item.solution}
                                                    onChange={(value) => {
                                                        const items = [...formData.challengesSection.items];
                                                        items[idx].solution = value;
                                                        setFormData((prev: any) => ({
                                                            ...prev,
                                                            challengesSection: { ...prev.challengesSection, items },
                                                        }));
                                                    }}
                                                    placeholder="e.g., We optimize your store's UX/UI..."
                                                    modules={QUILL_MODULES}
                                                    formats={QUILL_FORMATS}
                                                    style={{ height: '150px', marginBottom: '50px' }}
                                                />
                                            </div>

                                            <div className="col-12 mb-3">
                                                <label className="form-label">Image</label>
                                                <input
                                                    className="form-control"
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={(e) => {
                                                        const file = e.target.files?.[0];
                                                        if (file) {
                                                            setFormData((prev: any) => {
                                                                const items = [...prev.challengesSection.items];
                                                                items[idx].tab_image = file;
                                                                return {
                                                                    ...prev,
                                                                    challengesSection: { ...prev.challengesSection, items },
                                                                };
                                                            });
                                                        }
                                                    }}
                                                />
                                                {item.tab_image && (
                                                    <img
                                                        src={typeof item.tab_image === 'string' ? item.tab_image as string : URL.createObjectURL(item.tab_image as File)}
                                                        alt="Preview"
                                                        className="img-thumbnail mt-2"
                                                        style={{ width: "150px" }}
                                                    />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <button
                                className="btn btn-primary mt-2"
                                type="button"
                                onClick={() => setFormData((prev: any) => ({
                                    ...prev,
                                    challengesSection: {
                                        ...prev.challengesSection,
                                        items: [
                                            ...prev.challengesSection.items,
                                            {
                                                uid: `ch-new-${Date.now()}`,
                                                  heading: "",
                                                challenge: "",
                                                solution: "",
                                                tab_image: null
                                            }
                                        ]
                                    },
                                }))}
                            >
                                + Add Challenge
                            </button>
                        </div>
                    </div>
                </div>


                {/* Process Section */}
                <div className="card shadow-sm mb-4">
                    <div className="card-header bg-warning text-dark d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Process Section</h5>
                        <button
                            className="btn btn-sm btn-light"
                            type="button"
                            onClick={() => setFormData((prev: any) => ({
                                ...prev,
                                processSection: {
                                    ...prev.processSection,
                                    steps: [
                                        ...prev.processSection.steps,
                                        {
                                            uid: `st-new-${Date.now()}`,
                                            title: "",
                                            description: "",
                                        }
                                    ]
                                },
                            }))}
                        >
                            + Add Step
                        </button>
                    </div>
                    <div className="card-body">
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label className="form-label">Section Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Process Title"
                                    value={formData.processSection.title}
                                    onChange={e => handleNestedChange("processSection", "title", e.target.value)}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label">Section Subtitle</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Process Subtitle"
                                    value={formData.processSection.subtitle}
                                    onChange={e => handleNestedChange("processSection", "subtitle", e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="col-12">
                            {formData.processSection.steps.map((step: any, idx: number) => (
                                <div key={step.uid || idx} className="card mb-3">
                                    <div className="card-header d-flex justify-content-between align-items-center">
                                        <span>Step #{step.stepNumber}</span>
                                        <button
                                            className="btn btn-sm btn-danger"
                                            type="button"
                                            onClick={() => {
                                                // Prevent deletion if only one step remains
                                                if (formData.processSection.steps.length <= 1) {
                                                    Swal.fire("Cannot Delete", "You must have at least one process step.", "warning");
                                                    return;
                                                }

                                                const steps = formData.processSection.steps.filter((_: any, i: number) => i !== idx);
                                                setFormData((prev: any) => ({
                                                    ...prev,
                                                    processSection: { ...prev.processSection, steps },
                                                }));
                                            }}
                                            disabled={formData.processSection.steps.length <= 1}
                                        >
                                            Remove Step
                                        </button>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">

                                            <div className="col-md-12 mb-3">
                                                <label className="form-label">Step Title</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="e.g., Discovery & Planning"
                                                    value={step.title}
                                                    onChange={e => {
                                                        const steps = [...formData.processSection.steps];
                                                        steps[idx].title = e.target.value;
                                                        setFormData((prev: any) => ({
                                                            ...prev,
                                                            processSection: { ...prev.processSection, steps },
                                                        }));
                                                    }}
                                                />
                                            </div>

                                            <div className="col-md-12 mb-3">
                                                <label className="form-label">Description</label>
                                                <ReactQuill
                                                    theme="snow"
                                                    value={step.description}
                                                    onChange={(value) => {
                                                        const steps = [...formData.processSection.steps];
                                                        steps[idx].description = value;
                                                        setFormData((prev: any) => ({
                                                            ...prev,
                                                            processSection: { ...prev.processSection, steps },
                                                        }));
                                                    }}
                                                    placeholder="e.g., We analyze your business requirements and create a detailed project roadmap."
                                                    modules={QUILL_MODULES}
                                                    formats={QUILL_FORMATS}
                                                    style={{ height: '120px', marginBottom: '50px' }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <button
                                className="btn btn-primary mt-2"
                                type="button"
                                onClick={() => setFormData((prev: any) => ({
                                    ...prev,
                                    processSection: {
                                        ...prev.processSection,
                                        steps: [
                                            ...prev.processSection.steps,
                                            {
                                                title: "",
                                                description: "",
                                            }
                                        ]
                                    },
                                }))}
                            >
                                + Add Step
                            </button>
                        </div>
                    </div>
                </div>


                {/* Testimonials Section */}
                <div className="card shadow-sm mb-4">
                    <div className="card-header bg-success text-white d-flex justify-content-between align-items-center">
                        <h5 className="mb-0">Testimonials Section</h5>
                    </div>
                    <div className="card-body">
                        <div className="col-12">
                            {formData?.testimonialsSection?.testimonials?.map((testimonial: any, idx: number) => (
                                <div key={idx} className="card mb-3">
                                    <div className="card-header d-flex justify-content-between align-items-center">
                                        <span>Testimonial #{idx + 1}</span>
                                        <button
                                            className="btn btn-sm btn-danger"
                                            type="button"
                                            onClick={() => {
                                                if (formData?.testimonialsSection.length <= 1) {
                                                    Swal.fire("Cannot Delete", "You must have at least one testimonial.", "warning");
                                                    return;
                                                }
                                                setFormData((prev: any) => ({
                                                    ...prev,
                                                    testimonialsSection: prev.testimonialsSection.filter((_: any, i: number) => i !== idx),
                                                }));
                                            }}
                                        >
                                            Remove Testimonial
                                        </button>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12 mb-3">
                                                <label className="form-label">Name *</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="e.g., John Doe"
                                                    value={testimonial.name}
                                                    onChange={e => {
                                                        const testimonials = [...formData?.testimonialsSection];
                                                        testimonials[idx].name = e.target.value;
                                                        setFormData((prev: any) => ({
                                                            ...prev,
                                                            testimonialsSection: testimonials,
                                                        }));
                                                    }}
                                                    required
                                                />
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label className="form-label">Testimonial *</label>
                                                <textarea
                                                    className="form-control"
                                                    rows={4}
                                                    placeholder="Testimonial"
                                                    value={testimonial.testimonial}
                                                    onChange={e => {
                                                        const testimonials = [...formData?.testimonialsSection];
                                                        testimonials[idx].testimonial = e.target.value;
                                                        setFormData((prev: any) => ({
                                                            ...prev,
                                                            testimonialsSection: testimonials,
                                                        }));
                                                    }}
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {Array.isArray(formData?.testimonialsSection) &&
                                formData?.testimonialsSection?.map((testimonial: any, idx: number) => (
                                    <div key={idx} className="card mb-3">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <span>Testimonial #{idx + 1}</span>
                                            <button
                                                className="btn btn-sm btn-danger"
                                                type="button"
                                                onClick={() => {
                                                    if (formData?.testimonialsSection.length <= 1) {
                                                        Swal.fire("Cannot Delete", "You must have at least one testimonial.", "warning");
                                                        return;
                                                    }
                                                    setFormData((prev: any) => ({
                                                        ...prev,
                                                        testimonialsSection: prev.testimonialsSection.filter((_: any, i: number) => i !== idx),
                                                    }));
                                                }}
                                            >
                                                Remove Testimonial
                                            </button>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-12 mb-3">
                                                    <label className="form-label">Name *</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="e.g., John Doe"
                                                        value={testimonial.name}
                                                        onChange={e => {
                                                            const testimonials = [...formData?.testimonialsSection];
                                                            testimonials[idx].name = e.target.value;
                                                            setFormData((prev: any) => ({
                                                                ...prev,
                                                                testimonialsSection: testimonials,
                                                            }));
                                                        }}
                                                        required
                                                    />
                                                </div>
                                                <div className="col-12 mb-3">
                                                    <label className="form-label">Testimonial *</label>
                                                    <textarea
                                                        className="form-control"
                                                        rows={4}
                                                        placeholder="Testimonial"
                                                        value={testimonial.testimonial}
                                                        onChange={e => {
                                                            const testimonials = [...formData?.testimonialsSection];
                                                            testimonials[idx].testimonial = e.target.value;
                                                            setFormData((prev: any) => ({
                                                                ...prev,
                                                                testimonialsSection: testimonials,
                                                            }));
                                                        }}
                                                        required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            <button
                                className="btn btn-primary mt-2"
                                type="button"
                                onClick={() =>
                                    setFormData((prev: any) => {
                                        const currentTestimonials = Array.isArray(prev.testimonialsSection)
                                            ? prev.testimonialsSection
                                            : [];
                                        return {
                                            ...prev,
                                            testimonialsSection: [
                                                ...currentTestimonials,
                                                { name: "", testimonial: "" },
                                            ],
                                        };
                                    })
                                }
                            >
                                + Add Testimonial
                            </button>

                        </div>

                    </div>
                </div>

                {/* FAQ Section */}
                <div className="card shadow-sm mb-4">
                    <div className="card-header bg-danger text-white">
                        <h5 className="mb-0">FAQ Section</h5>
                    </div>
                    <div className="card-body">
                        <div className="col-12">
                            {formData?.faqSection?.faqs?.map((faq: any, idx: number) => (
                                <div key={faq?.uid || idx} className="card mb-3">
                                    <div className="card-header d-flex justify-content-between align-items-center">
                                        <span>FAQ #{idx + 1}</span>
                                        <button
                                            className="btn btn-sm btn-danger"
                                            type="button"
                                            onClick={() => {
                                                const currentFaqs = Array.isArray(formData?.faqSection?.faqs)
                                                    ? formData.faqSection.faqs
                                                    : [];
                                                const newFaqs = currentFaqs.filter((_: any, i: number) => i !== idx);
                                                setFormData((prev: any) => ({
                                                    ...prev,
                                                    faqSection: {
                                                        ...prev.faqSection,
                                                        faqs: newFaqs
                                                    },
                                                }));
                                            }}
                                            disabled={!Array.isArray(formData?.faqSection?.faqs) || formData.faqSection.faqs.length <= 1}
                                        >
                                            Remove FAQ
                                        </button>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12 mb-3">
                                                <label className="form-label">Question</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Question"
                                                    value={faq?.question || ""}
                                                    onChange={(e) => {
                                                        const currentFaqs = Array.isArray(formData?.faqSection?.faqs)
                                                            ? [...formData.faqSection.faqs]
                                                            : [];
                                                        if (currentFaqs[idx]) {
                                                            currentFaqs[idx].question = e.target.value;
                                                            setFormData((prev: any) => ({
                                                                ...prev,
                                                                faqSection: {
                                                                    ...prev.faqSection,
                                                                    faqs: currentFaqs
                                                                },
                                                            }));
                                                        }
                                                    }}
                                                />
                                            </div>

                                            <div className="col-12 mb-3">
                                                <label className="form-label">Answer</label>
                                                <textarea
                                                    className="form-control"
                                                    rows={3}
                                                    placeholder="Answer"
                                                    value={faq?.answer || ""}
                                                    onChange={(e) => {
                                                        const currentFaqs = Array.isArray(formData?.faqSection?.faqs)
                                                            ? [...formData.faqSection.faqs]
                                                            : [];
                                                        if (currentFaqs[idx]) {
                                                            currentFaqs[idx].answer = e.target.value;
                                                            setFormData((prev: any) => ({
                                                                ...prev,
                                                                faqSection: {
                                                                    ...prev.faqSection,
                                                                    faqs: currentFaqs
                                                                },
                                                            }));
                                                        }
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {Array.isArray(formData?.faqSection) &&

                                formData?.faqSection?.map((faq: any, idx: number) => (
                                    <div key={faq?.uid || idx} className="card mb-3">
                                        <div className="card-header d-flex justify-content-between align-items-center">
                                            <span>FAQ #{idx + 1}</span>
                                            <button
                                                className="btn btn-sm btn-danger"
                                                type="button"
                                                onClick={() => {
                                                    const currentFaqs = Array.isArray(formData?.faqSection?.faqs)
                                                        ? formData.faqSection.faqs
                                                        : [];
                                                    const newFaqs = currentFaqs.filter((_: any, i: number) => i !== idx);
                                                    setFormData((prev: any) => ({
                                                        ...prev,
                                                        faqSection: {
                                                            ...prev.faqSection,
                                                            faqs: newFaqs
                                                        },
                                                    }));
                                                }}
                                                disabled={!Array.isArray(formData?.faqSection?.faqs) || formData.faqSection.faqs.length <= 1}
                                            >
                                                Remove FAQ
                                            </button>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-md-12 mb-3">
                                                    <label className="form-label">Question</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Question"
                                                        value={faq?.question || ""}
                                                        onChange={(e) => {
                                                            const currentFaqs = Array.isArray(formData?.faqSection?.faqs)
                                                                ? [...formData.faqSection.faqs]
                                                                : [];
                                                            if (currentFaqs[idx]) {
                                                                currentFaqs[idx].question = e.target.value;
                                                                setFormData((prev: any) => ({
                                                                    ...prev,
                                                                    faqSection: {
                                                                        ...prev.faqSection,
                                                                        faqs: currentFaqs
                                                                    },
                                                                }));
                                                            }
                                                        }}
                                                    />
                                                </div>

                                                <div className="col-12 mb-3">
                                                    <label className="form-label">Answer</label>
                                                    <textarea
                                                        className="form-control"
                                                        rows={3}
                                                        placeholder="Answer"
                                                        value={faq?.answer || ""}
                                                        onChange={(e) => {
                                                            const currentFaqs = Array.isArray(formData?.faqSection?.faqs)
                                                                ? [...formData.faqSection.faqs]
                                                                : [];
                                                            if (currentFaqs[idx]) {
                                                                currentFaqs[idx].answer = e.target.value;
                                                                setFormData((prev: any) => ({
                                                                    ...prev,
                                                                    faqSection: {
                                                                        ...prev.faqSection,
                                                                        faqs: currentFaqs
                                                                    },
                                                                }));
                                                            }
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            <button
                                className="btn btn-primary mt-2"
                                type="button"
                                onClick={() =>
                                    setFormData((prev: any) => {
                                        const currentFaqs = Array.isArray(prev.faqSection?.faqs)
                                            ? prev.faqSection.faqs
                                            : [];
                                        return {
                                            ...prev,
                                            faqSection: {
                                                ...prev.faqSection,
                                                faqs: [
                                                    ...currentFaqs,
                                                    {
                                                        uid: `faq-${Date.now()}`,
                                                        question: "",
                                                        answer: "",
                                                        order: currentFaqs.length + 1,
                                                    },
                                                ],
                                            },
                                        };
                                    })
                                }
                            >
                                + Add FAQ
                            </button>
                        </div>
                    </div>
                </div>



                {/* Action Buttons */}
                <div className="d-flex justify-content-end gap-2 mb-5">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => router.back()}
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={handleSave}
                    >
                        Save Page
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Page;
