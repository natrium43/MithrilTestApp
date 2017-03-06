<div>
    <nav class="navbar-wrapper navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">WebSiteName</a>
            </div>
            <ul className="nav navbar-nav navbar-right">
                <li className="active"><a href="#login">Home</a></li>
                <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown">Page 1 <span className="caret" /></a>
                    <ul className="dropdown-menu">
                        <li class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false" >View Cart</li>
                        {/*<li><a href="#">Page 1-1</a></li>*/}
                        {/*<li> <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"> <span class="glyphicon glyphicon-shopping-cart"></span> 7 - Items<span class="caret"></span></a></li>*/}
                        {/*<li><a href="#">Page 1-3</a></li>*/}
                    </ul>
                </li>
                <li> <a href="#" class="dropdown-toggle" data-toggle="dropdown1" role="button" aria-expanded="false"> <span class="glyphicon glyphicon-shopping-cart"></span> 7 - Items<span class="caret"></span></a></li>
                <li> <a href="#" class="dropdown-toggle" data-toggle="dropdown2" role="button" aria-expanded="false"> <span class="glyphicon glyphicon-user"></span><span class="caret"></span></a></li>
            </ul>
        </div>

    </nav>
    <div className="container marketing">
        {/* Three columns of text below the carousel */}

        <div className="row">
            {Library.BookViewModel.books().map(function(task,index){
                return   <div className="col-lg-4">
                    <img src={task.cover} onerror={ctrl.onError}  alt="Generic Cover image" />
                    <h2>{task.title}</h2>
                    <p>Author: {task.author_lf}</p>
                    <p><a className="btn btn-default" href="#">View details »</a></p>
                </div>
            })}

        </div>{/* /.row */}
        {/* START THE FEATURETTES */}
        <hr className="featurette-divider" />

        {/* FOOTER */}
        <footer>
            <p className="pull-right"><a href="#">Back to top</a></p>
            <p>© Dhanya <a href="#">Privacy</a> · <a href="#">Terms</a></p>
        </footer>
    </div>{/* /.container */}
</div>