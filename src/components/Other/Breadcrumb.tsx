import { Link } from "react-router-dom";

interface IProps {
    currentPage: string;
}

const Breadcrumb: React.FC<IProps> = ({ currentPage }) => {
    return (
        <section id="breadcrumb">
            <div className="container">
                <ul className="breadcrumb-content d-flex m-0 p-0">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <span>{currentPage}</span>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Breadcrumb;