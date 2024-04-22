import "./content.css"
import { data } from "../../data"
import Card from "../Card/Card"

const Content = () => {
    return (
        <div className="content">
            {
                data?.map((item) => {
                    return (
                        <Card key={item.id} item={item} />
                    )
                })
            }

        </div>
    )
}

export default Content