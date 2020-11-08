import { createCustomElement } from "@servicenow/ui-core";
import snabbdom from "@servicenow/ui-renderer-snabbdom";
import styles from "./styles.scss";

const view = (state, { updateState }) => {
	return (
		<section>
			<h1>Hello World</h1>
		</section>
	);
};

createCustomElement("x-551066-hello-world", {
	renderer: { type: snabbdom },
	view,
	styles,
});
