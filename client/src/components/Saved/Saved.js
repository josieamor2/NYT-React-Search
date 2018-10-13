


import React from "react";
// import Moment from 'react-moment';
import Comments from "../Comments";
import "./Saved.css";

const Saved = props => {
    return (

        <div className="container saved-container">
            <div className="row">
                <div className="col-12">
                    <div className="panel panel-default">
                        <div className="panel-heading saved-header">
                            <h1>Saved</h1>
                        </div>
                        <div className="panel-body col-12">

                            {props.saved.map((saved, i) => (
                                <div className="article-wrapper" key={i}>
                                    <div className="panel panel-default">
                                        <div className="panel-body col-12">


                                            <div class="float-left col-6">
                                                <h4>{saved.title}</h4>
                                                <p>
                                                    <a href={saved.url} target="_blank">Read Article</a>
                                                </p>
                                            </div>
                                            <div class="buttons-right col-6">
                                                <button className="btn btn-md btn-primary pull-right change-saved" data-id="" onClick={() => props.deleteArticle(saved._id)}>Remove Article</button>

                                                <button type='button' className="btn btn-md btn-primary pull-right change-saved" style={{ marginRight: '10px' }} onClick={() => props.openModal(saved._id, saved.title)}>Add Annotation</button>
                                                
                                            </div>
                                            <Comments comments={saved.comment} deleteComment={props.deleteComment} />
                                            {/* <p>Publish Date: &nbsp;
                        <Moment format="MMMM Do, YYYY, h:mma">
                          {saved.date}
                        </Moment>
                      </p> */}



                                        </div>
                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
};

export default Saved;