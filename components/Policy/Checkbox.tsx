interface Props {
    id: string;
    link: string;
    children: React.ReactNode;
}

const Checkbox = (props: Props) => {
    const { id, link, children } = props;

    return (
        <>
            <input type="checkbox" id={id}></input>
            <label htmlFor={id}>{children}</label>
            <a href={link} target="_blank" rel="noreferrer">
                보기
            </a>
        </>
    );
};

export default Checkbox;
