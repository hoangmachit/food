import { Link } from "react-router-dom";
const Breadcrumb = (props) => {
    const { name } = props;
    return (
        <>
            <section id="breadcrumb">
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link href="/" title="Home">Home</Link></li>
                        <li className="breadcrumb-item active" title={name}>{name}</li>
                    </ol>
                </nav>
            </section>
        </>
    )
}
export default Breadcrumb;