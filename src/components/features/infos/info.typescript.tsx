import React from "react";

export default class FeaturesInfosTypescript extends React.Component<{}, {}> {
	constructor(props: {}) {
		super(props);
	}

	render() {
		return (
            <div style={{ background: "linear-gradient(30deg, rgba(7,4,136,1) 0%, rgba(0,187,255,1) 100%)", width: "100%", height: "100%", borderRadius: "15px", animation: 'fade-in 1s' }}>
                hello
            </div>
        );
	}
}
