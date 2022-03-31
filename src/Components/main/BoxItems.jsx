import Item from "../../Components/main/Item";

export default function BoxItems({ env }) {
    return (
        <>
            <p>{ env.messages.greeting }</p>
            <ul>
                <li><Item /></li>
                <li><Item /></li>
                <li><Item /></li>
                <li><Item /></li>
                <li><Item /></li>
            </ul>
        </>
    );
};
