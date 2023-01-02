function navbar (){
    return(
        <div>
            <div className="topbar-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 hidden-xs-down">
                        <div className="topsocial">
                            <a href="." data-toggle="tooltip" data-placement="bottom" title="Facebook">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="." data-toggle="tooltip" data-placement="bottom" title="Youtube">
                                <i className="fa fa-youtube"></i>
                            </a>
                            <a href="." data-toggle="tooltip" data-placement="bottom" title="Pinterest">
                                <i className="fa fa-pinterest"></i>
                            </a>
                            <a href="." data-toggle="tooltip" data-placement="bottom" title="Twitter">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="." data-toggle="tooltip" data-placement="bottom" title="Flickr">
                                <i className="fa fa-flickr"></i>
                            </a>
                            <a href="." data-toggle="tooltip" data-placement="bottom" title="Instagram">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="." data-toggle="tooltip" data-placement="bottom" title="Google+">
                                <i className="fa fa-google-plus"></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-4 hidden-md-down">
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                        <div className="topsearch text-right">
                            <a data-toggle="collapse" href=".collapseExample" aria-expanded="false" aria-controls="collapseExample"><i className="fa fa-search"></i> Search</a>
                        </div>
                    </div>
                </div>
            </div>

            </div>
            <div className="header-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="logo">
                                <a href="garden-index.html"><img src="images/version/garden-logo.png" alt=""/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

{/* nav */}
<header className="header">
            <div className="container">
                <nav className="navbar navbar-inverse navbar-toggleable-md">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse justify-content-md-center" id="Forest Timemenu">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link color-green-hover" href="index.html">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link color-green-hover" href="garden-category.html">Gardening</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link color-green-hover" href="garden-category.html">Outdoor Living</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link color-green-hover" href="garden-category.html">Indoor Living</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link color-green-hover" href="garden-category.html">Shopping Guides</a>
                            </li>  
                            <li className="nav-item">
                                <a className="nav-link color-green-hover" href="garden-contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>

{/* nav */}

        {/* <div className="page-title wb"> */}
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <h2><i className="fa fa-leaf bg-green" id="leaf"></i> Category by: Gardening</h2>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 hidden-xs-down hidden-sm-down">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href=".">Home</a></li>
                            <li className="breadcrumb-item"><a href=".">Blog</a></li>
                            <li className="breadcrumb-item"><a href=".">Gardening</a></li>
                        </ol>
                    </div>                    
                </div>
            </div>
        {/* </div> */}

        </div>
    );
}

export default navbar;