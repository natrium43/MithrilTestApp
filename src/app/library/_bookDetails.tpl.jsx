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
    <div className="container marketing">
        <h2>Book Details </h2>
            <div class="panel panel-default">
                <div class="panel-heading">{Model.BookList.selectedBook().title}</div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-sm-4">
                            <img src={Model.BookList.selectedBook().cover} height="300px" width="280px" ></img>
                        </div>
                        <div class="col-sm-8">
                            <ul class="list-group">
                                <li class="list-group-item">Title: {Model.BookList.selectedBook().title}</li>
                                <li class="list-group-item">Author: {Model.BookList.selectedBook().author_lf}</li>
                                <li class="list-group-item">ISBN: {Model.BookList.selectedBook().ISBN}</li>
                                <li class="list-group-item">Year: {Model.BookList.selectedBook().publicationdate}</li>
                                <li class="list-group-item">Rating: {Model.BookList.selectedBook().rating}</li>
                                <li class="list-group-item">Tags:  {Model.BookList.selectedBook().tags.length > 1 ? (Model.BookList.selectedBook().tags):"None"}</li>
                                {/*<li class="list-group-item text-center"><span><a onclick={Model.BookList.addCartHandle.bind(this, Model.BookList.selectedBook())}className="btn btn-default">Add to cart</a></span></li>*/}
                            </ul>
                            <div class="text-center"><span><a onclick={Model.BookList.addCartHandle.bind(this, Model.BookList.selectedBook())}className="btn btn-default">Add to cart</a></span></div>
                        </div>
                    </div>
                </div>
            </div>

        {/*</div>/!* /.row *!/*/}
        {/* START THE FEATURETTES */}
        <hr className="featurette-divider" />

        {/* FOOTER */}
        <footer>
            <p className="pull-right"><a href="#">Back to top</a></p>
            <p>© Dhanya <a href="#">Privacy</a> · <a href="#">Terms</a></p>
        </footer>
    </div>{/* /.container */}
</div>