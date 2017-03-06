<div id="myCarousel" className="carousel slide">
    {/* Indicators */}
    <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to={0} className="active" />
        <li data-target="#myCarousel" data-slide-to={1} />
        <li data-target="#myCarousel" data-slide-to={2} />
    </ol>
    <div className="carousel-inner">
        <div className="item active">
            <img src="data:image/png;base64," data-src="holder.js/100%x500/auto/#777:#7a7a7a/text:First slide" alt="First slide" />
            <div className="container">
                <div class="col-sm-10 col-sm-offset-1 search-wrapper">
                    <div class="input-group ">
                        <input type="text" class="form-control" placeholder="Search for books" value={ctrl.searchKey()} onchange={ctrl.searchKeyUpdate} />

                        <span class="input-group-btn">
                        <button class="btn btn-default" type="button" onclick={ctrl.searchHandle}>Go!</button>
            </span>
                    </div>
                </div>
                <div className="carousel-caption">
                    <h1>Example headline.</h1>
                    <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                    <p><a className="btn btn-large btn-primary" href="#">Sign up today</a></p>
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
    <a className="left carousel-control"  data-slide="prev"><span className="glyphicon glyphicon-chevron-left" /></a>
    <a className="right carousel-control" data-slide="next"><span className="glyphicon glyphicon-chevron-right" /></a>
</div>