[
    <div class="row">
        <div class="col-md-8">
            <h3>What is Mithri!!!l?</h3>
            <p>
                Mithril is a client-side MVC framework - a tool to organize code in a way that is easy to think about and to maintain.<br/>
                The framework is created by Leo Horie. For more information, go to <a href="http://lhorie.github.io/">official website</a> or read <a href="http://lhorie.github.io/mithril/getting-started.html">Getting Started</a>.
            </p>
        </div>
    </div>,
    <hr/>,
    <div class="row">
        <div class="col-md-4">
            <h3>Light-weight</h3>
            <p>
                Only 3kb gzipped, no dependencies<br/>
                Small API, small learning curve
            </p>
        </div>
        <div class="col-md-4">
            <h3>Robust</h3>
            <p>
                Safe-by-default templates<br/>
                Hierarchical MVC via components
            </p>
        </div>
        <div class="col-md-4">
            <h3>Fast</h3>
            <p>
                Virtual DOM diffing and compilable templates<br/>
                Intelligent auto-redrawing system
            </p>
        </div>
    </div>,
    <hr/>,
    <div class="row">
        <div class="col-md-8">
            <h3>Examples</h3>
        </div>
    </div>,
    <table class="table">
        <thead>
        <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
        </tr>
        <tr>
            <td>Mary</td>
            <td>Moe</td>
            <td>mary@example.com</td>
        </tr>
        <tr>
            <td>July</td>
            <td>Dooley</td>
            <td>july@example.com</td>
        </tr>
        </tbody>
    </table>,
    <div class="row">
        <div class="col-md-6 description">
            {description()}
        </div>
        <div class="col-md-6">
            {new ctrl.tabs.$view(ctrl.tabsCtrl)}
        </div>
    </div>

]
