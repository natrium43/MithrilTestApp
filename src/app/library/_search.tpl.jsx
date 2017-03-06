<div>
    <nav class="navbar-wrapper navbar-inverse">
    <div className="container-fluid">
        <div className="navbar-header">
            <a className="navbar-brand" href="#">WebSiteName</a>
        </div>
        <ul className="nav navbar-nav navbar-right">
            <li><a href="#/library">Home</a></li>
            <li> <a href="#" class="dropdown-toggle" data-toggle="dropdown1" role="button" aria-expanded="false"> <span class="glyphicon glyphicon-shopping-cart"></span>{Model.BookList.cartNumber()}<span class="caret"></span></a></li>
            <li> <a href="#" class="dropdown-toggle" data-toggle="dropdown2" role="button" aria-expanded="false"> <span class="glyphicon glyphicon-user"></span><span class="caret"></span></a></li>
        </ul>
    </div>

</nav>
    <h3 class="text-center">Search Results: </h3>
    <h4 class="text-center">
        {Model.BookList.numResults()} Book(s) found for {Model.BookList.searchKey()}
    </h4>
    <hr />
    <div className="container marketing">
        {/* Three columns of text below the carousel */}

        <div className="row">
            {Model.BookViewModel.books().map(function(task,index){
                return   <div className="col-lg-4">
                    <img className="thumbnail bookImg " src={task.cover} onerror={ctrl.onError}  alt="Generic Cover image" />
                    <h4>{task.title}</h4>
                    <p>Author: {task.author_lf}</p>

                    <span class="col-sm-6"><a className="btn btn-default" onclick={Model.BookList.viewDetailsHandle.bind(this,task)}>View details »</a></span>
                    <span class="col-sm-5"><a onclick={Model.BookList.addCartHandle.bind(this, task)}className="btn btn-default" href="#">Add to cart</a></span>
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