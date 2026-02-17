type Props = {
    key: number;
    name: string;

}

export default function Task (props: Props) {
    return (
        <>
            <div className="border border-blue-500 bg-amber-100 p-2 m-2 rounded-md">{props.name}</div>
        </>
    );
}