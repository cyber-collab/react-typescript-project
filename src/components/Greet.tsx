
type GreetProps = {
    text: string;
    messageCounter: number;
}
export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>{props.text}, {props.messageCounter}</h2>
        </div>
    );
};
