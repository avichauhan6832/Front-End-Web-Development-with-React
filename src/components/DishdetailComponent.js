import React from "react";
import { Card, CardImg, CardBody,CardText, CardTitle} from "reactstrap";

function RenderDish({dish}) {
    if (dish != null) {
        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}

function RenderComments({comment}) {
    if (comment != null) {

        let list = comment.map((comment)=>{

            return(
                <li key={comment.id} >
                    <div>
                        <p>{comment.comment}</p>
                        <p>--{comment.author},
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </div>
                </li>

            )
        })

        return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {list}
                    </ul>
                </div>
        )
    }
    else{
        return(
            <div></div>
        )
    }
}

const Dishdetail = (props) => {
    const {dish} = props;
    
    return dish?(
        <div className="container">
            <div className="row">
                <RenderDish dish={dish} />
                <RenderComments comment={dish.comments} />
            </div>
        </div>
    ):(
        <div></div>
    )
}

export default Dishdetail;