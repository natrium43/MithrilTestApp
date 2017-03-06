<div>
    <nav class="navbar-wrapper navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="#">WebSiteName</a>
            </div>
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#/library">Home</a></li>
                <li> <a class="active dropdown-toggle" data-toggle="dropdown1" role="button" aria-expanded="false"> <span class="glyphicon glyphicon-shopping-cart"></span>{Model.BookList.cartNumber()}<span class="caret"></span></a></li>
                <li> <a href="#" class="dropdown-toggle" data-toggle="dropdown2" role="button" aria-expanded="false"> <span class="glyphicon glyphicon-user"></span><span class="caret"></span></a></li>
            </ul>
        </div>

    </nav>
    <h3 class="text-center">Cart Items: </h3>
    <h4 class="text-center">
        {Model.BookList.cartBooks().length}Books in cart
    </h4>
    <div className="container marketing">
        <div className="row">
            {Model.BookList.cartBooks().map(function(task,index){
                return   <div className="col-lg-4">
                    <img src={task.cover}   alt="Generic Cover image" />
                    <h2>{task.title}</h2>
                    <p>Author: {task.author_lf}</p>
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