import React from 'react'

const Frame = () => {
    return (
        <div>
            <div style={{ height: "100vh" }}>
                {/* <Collectiion/> */}
                <iframe
                    src="https://shopify-base2brand.vercel.app"
                    width="100%"
                    height="100%"
                    style={{ border: "none" }}
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}

export default Frame
