<div>
    <nav class="navbar-wrapper navbar-inverse">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand">My Library</a>
            </div>
            <ul className="nav navbar-nav navbar-right">
                <li className="active"><a>Home</a></li>
                <li> <a onclick={Model.BookList.viewCartHandle.bind(this)} class="dropdown-toggle" data-toggle="dropdown1" role="button" aria-expanded="false"> <span class="glyphicon glyphicon-shopping-cart"></span> {Model.BookList.cartNumber()}<span class="caret"></span></a></li>
                <li> <a href="#" class="dropdown-toggle" data-toggle="dropdown2" role="button" aria-expanded="false"> <span class="glyphicon glyphicon-log-out"></span></a></li>
            </ul>
        </div>

    </nav>

    {/* Carousel
     ================================================== */}
    <div id="myCarousel" className="carousel slide">
        {/* Indicators */}
        <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to={0} className="active" />
            <li data-target="#myCarousel" data-slide-to={1} />
            <li data-target="#myCarousel" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
            <div className="item active">
                <div className="container">
                    <div class="col-sm-10 col-sm-offset-1 search-wrapper">
                        <div class="input-group ">
                            <input type="text" class="form-control" placeholder="Search for books" value={Model.BookList.searchKey()} onchange={ctrl.searchKeyUpdate} />

                            <span class="input-group-btn">
                        <button class="btn btn-default" type="button" onclick={Model.BookList.searchHandle}>Go!</button>
            </span>
                        </div>
                    </div>
                    <div className="carousel-caption">
                        <h1>Today a reader, tomorrow a leader</h1>
                        <p>A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one</p>
                        <p><a className="btn btn-large btn-primary" href="#/login">Sign up today</a></p>
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="data:image/png;base64," data-src="holder.js/100%x500/auto/#777:#7a7a7a/text:Second slide" alt="Second slide" />
                <div className="container">
                    <div className="carousel-caption">
                        <h1>Another example headline.</h1>
                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                        <p><a className="btn btn-large btn-primary" href="#">Learn more</a></p>
                    </div>
                </div>
            </div>
            <div className="item">
                <img src="data:image/png;base64," data-src="holder.js/100%x500/auto/#777:#7a7a7a/text:Third slide" alt="Third slide" />
                <div className="container">
                    <div className="carousel-caption">
                        <h1>One more for good measure.</h1>
                        <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                        <p><a className="btn btn-large btn-primary" href="#">Browse gallery</a></p>
                    </div>
                </div>
            </div>
        </div>
        {/*<a className="left carousel-control"  data-slide="prev"><span className="glyphicon glyphicon-chevron-left" /></a>*/}
        {/*<a className="right carousel-control" data-slide="next"><span className="glyphicon glyphicon-chevron-right" /></a>*/}
    </div>
    {/* Marketing messaging and featurettes
     ================================================== */}
    {/* Wrap the rest of the page in another container to center all the content. */}
    <div className="container marketing">
        {/* Three columns of text below the carousel */}

        <div className="row">
            {Model.BookViewModel.books().map(function(task,index){
                return   <div className="col-lg-4">
                    <img src={task.cover}  className="thumbnail bookImg text-center" onerror={ctrl.onError}  alt="Generic Cover image" />
                    <h4>Author: <b>{task.author_lf}</b> </h4>
                    <div className="text-center">
                        <a className="btn btn-default bookActions " onclick={Model.BookList.viewDetailsHandle.bind(this,task)}>View details »</a>
                        <a onclick={Model.BookList.addCartHandle.bind(this, task)}className="btn btn-default bookActions" href="#">Add to cart</a>
                    </div>
                </div>
            })}

        </div>{/* /.row */}
        {/* START THE FEATURETTES */}
        <hr className="featurette-divider" />

        {/* FOOTER */}
        <footer>
            <p className="pull-right"></p>
            <p>© Dhanya P</p>
        </footer>
    </div>{/* /.container */}
</div>
