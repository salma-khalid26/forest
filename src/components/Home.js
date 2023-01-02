import { useState } from "react";


function Home (){
    const [data , setdata] = useState([
            {
            
            author:"Abbey White",
            title:"Will Smith Explains Response to Chris Rock Post-Oscars Slap, Offers Second Apology to Rock and His Family - Hollywood Reporter",
            description:"Will Smith says “there is no part of me that thinks that was the right way to behave in that moment” when explaining his decision to slap Chris Rock during the March 2022 Oscars ceremony. In a new Instagram video, the King Richard star answers a series of que…",
            url:"https://www.hollywoodreporter.com/movies/movie-news/will-smith-explains-chris-rock-oscars-slap-1235189032/",
            urlToImage:"https://www.hollywoodreporter.com/wp-content/uploads/2022/07/GettyImages-1388090286-1.jpg?w=1024",
            publishedAt:"2022-07-29T19:54:19Z",
            content:"Will Smith says “there is no part of me that thinks that was the right way to behave in that moment” when explaining his decision to slap Chris Rock during the March 2022 Oscars ceremony. \r\nIn a new … [+5181 chars]"
            },
            {
            
            author:"Hattie Lindert",
            title:"Shakira is facing more than eight years in Spanish prison for tax fraud - The A.V. Club",
            description:"Prosecutors in the case are reportedly seeking a fine of €24 million in addition to the sentence",
            url:"https://www.avclub.com/shakira-facing-eight-years-in-spanish-prison-tax-fraud-1849349440",
            urlToImage:"https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/2a906312b5f2139ddaed28db9344604f.jpg",
            publishedAt:"2022-07-29T19:31:00Z",
            content:"Despite her timeless assertion regarding the honesty of her hips, prosecutors in Spain are moving forward with charges stating Shakira has been dishonest about her taxes. After declining a settlement… [+1958 chars]"
            },
            {
            
            author:null,
            title:"Predicting Roman Reigns vs. Brock Lesnar at SummerSlam: WWE After the Bell, July 29, 2022 - WWE",
            description:"Corey Graves & Vic Joseph take an in-depth look at the Last Man Standing Match for the Undisputed WWE Universal Championship at SummerSlam.Stream WWE on Peac...",
            url:"https://www.youtube.com/watch?v=FbACisQlGxM",
            urlToImage:"https://i.ytimg.com/vi/FbACisQlGxM/maxresdefault.jpg",
            publishedAt:"2022-07-29T19:16:10Z",
            content:null
            },
            {
            author:"TMZ Staff",
            title:"Jennifer Lopez Works in Europe While Ben Affleck Hangs in L.A. After Paris Trip - TMZ",
            description:"Jennifer Lopez remains in Europe by herself while husband Ben Affleck returns to L.A. after their trip to Paris.",
            url:"https://www.tmz.com/2022/07/29/jennifer-lopez-capri-italy-ben-affleck-back-los-angeles-paris-trip/",
            urlToImage:"https://imagez.tmz.com/image/d6/16by9/2022/07/29/d673ad9b701c4ca08b03db3408caddff_xl.jpg",
            publishedAt:"2022-07-29T18:51:00Z",
            content:"Jennifer Lopez is in no rush to return from Europe after vacationing with Ben Affleck ... she's still overseas for work and some play while Ben's on daddy duty in Los Angeles.\r\nJ Lo spent her Friday … [+907 chars]"
            },
            
            {
            author:"Margaret Abrams",
            title:"Jennifer Garner warns fans to 'be cautious' about injectables - Page Six",
            description:"“Be very, very incredibly judicious and wait as absolutely long as possible to add anything,” the 50-year-old actress advised.",
            url:"https://pagesix.com/2022/07/29/jennifer-garner-warns-fans-to-be-cautious-about-injectables/",
            urlToImage:"https://pagesix.com/wp-content/uploads/sites/3/2022/07/jennifer-garner-talks-injectables_52.jpg?quality=75&strip=all&w=1200",
            publishedAt:"2022-07-29T18:21:00Z",
            content:"Jennifer Garner isnt a Daredevil when it comes to tweaking her famous face.\r\nThe Texas-born actress, 50, recently spilled her beauty secrets to Harpers Bazaar, including the advice shed pass down to … [+1666 chars]"
            },
            
            {
            
            author:"Alexander K. Lee",
            title:"Dana White recalls Vince McMahon banishing him to cheap seats for WrestleMania, clarifies Josh Emmett ticket … - MMA Fighting",
            description:"Dana White believes he was the victim of some good-ribbing from former WWE boss Vince McMahon.",
            url:"https://www.mmafighting.com/2022/7/29/23281251/dana-white-vince-mcmahon-banishing-cheap-seats-for-wrestlemania-clarifies-josh-emmett-ticket-mix-up",
            urlToImage:"https://cdn.vox-cdn.com/thumbor/3Mrd9COsA9hPv3dPHk1Z-JkY3Qg=/0x0:3000x1571/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23905102/1406456629.jpg",
            publishedAt:"2022-07-29T18:00:00Z",
            content:"Dana White knows all about the chaos that comes with arranging for free seats at an event.\r\nThe UFC president has been on both sides of the equation and recently recounted a miserable experience he h… [+4517 chars]"
            },
            
            {
            
            author:"Oli Welsh",
            title:"Why is Netflix’s Marilyn Monroe film Blonde rated NC-17? - Polygon",
            description:"Blonde, directed by Andrew Dominik and starring Ana de Armas, will feature shocking sexual scenes taken from the fictionalized novel by Joyce Carol Oates. It will be Netflix’s first Original film to get the NC-17 rating.",
            url:"https://www.polygon.com/23283806/blonde-netflix-nc-17-rating-marilyn-monroe-movie-andrew-dominik",
            urlToImage:"https://cdn.vox-cdn.com/thumbor/AYYFDAr0iy9lPGhv33bpR5Fw6jo=/0x205:2890x1718/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23909872/BLONDE_STILLS_521082.JPG",
            publishedAt:"2022-07-29T17:25:00Z",
            content:"A detail of the trailer for Netflixs Marilyn Monroe film Blonde that may surprise some viewers is the NC-17 rating at the end. The film is clearly artistically shot, and seems to have an intense, dra… [+4135 chars]"
            },
            {
            
            author:"Borys Kit",
            title:"Leonardo DiCaprio, Martin Scorsese Tackling Naval Survival Tale ‘The Wager’ for Apple, Imperative (Exclusive) - Hollywood Reporter",
            description:"Leonardo DiCaprio and Martin Scorsese are teaming up once again, this time to tackle an adaptation of the upcoming David Grann non-fiction book, The Wager: A Tale of Shipwreck, Mutiny, and Murder. Apple Original Films has landed the rights to the book, due ou…",
            url:"https://www.hollywoodreporter.com/movies/movie-news/leonardo-dicaprio-martin-scorsese-naval-survival-movie-wager-apple-1235189018/",
            urlToImage:"https://www.hollywoodreporter.com/wp-content/uploads/2022/07/split_4A_16x9_template_v1-copy.jpg?w=1024",
            publishedAt:"2022-07-29T16:59:03Z",
            content:"Leonardo DiCaprio and Martin Scorsese are teaming up once again, this time to tackle an adaptation of the upcoming David Grann non-fiction book, The Wager: A Tale of Shipwreck, Mutiny, and Murder.\r\nA… [+2686 chars]"
            },
            {
            
            author:"Stephanie Giang-Paunon, Larry Fink",
            title:"'Thirteen Lives' director Ron Howard, star Colin Farrell detail 'exhausting' scenes: 'Nobody dared complain' - Fox News",
            description:"Amazon Prime Video's \"Thirteen Lives,'\" Ron Howard and Collin Farrell, discussed how challenging filming the movie was and how honored the actors were to bring the story to the big screen.",
            url:"https://www.foxnews.com/entertainment/thirteen-lives-director-ron-howard-star-colin-farrell-detail-exhausting-scenes-nobody-dared-complain",
            urlToImage:"https://static.foxnews.com/foxnews.com/content/uploads/2022/07/RonHoward.jpg",
            publishedAt:"2022-07-29T16:07:48Z",
            content:"During Amazon Prime Videos \"Thirteen Lives\" movie premiere, director Ron Howard told Fox News Digital in an exclusive interview that none of the cast members \"dared complain\" while filming on set. \r\n… [+3758 chars]"
            },
            {
            
            author:"https://www.facebook.com/InStyle",
            title:"Bella Hadid Paired the Tiniest Black String Bikini With the Biggest Gold Chain - InStyle",
            description:"Bella Hadid fueled our summer swimwear inspo with a black bikini and unexpected accessories.",
            url:"https://www.instyle.com/celebrity/bella-hadid/bella-hadid-tiny-black-bikini-gold-chain-michael-kors",
            urlToImage:"https://www.instyle.com/thmb/cUrZkqUsFhTBqvHBjp1AKUwz9CE=/3429x2286/filters:fill(auto,1)/GettyImages-1207485693-f8ad63aa2b774eee91c393ef4d9cf4de.jpg",
            publishedAt:"2022-07-29T15:22:09Z",
            content:"From strapless cut-out one-pieces to bikini-pajama hybrids, Bella Hadid has been singlehandedly fueling our swimwear obsession all summer long and she just added another hot beachwear look to her lis… [+1589 chars]"
            },
            {
            author:"Leyla Mohammed",
            title:"Candace Cameron Bure's Daughter Natasha Slams JoJo Siwa Amid Feud - BuzzFeed News",
            description:"The 23-year-old weighed in on all the drama after JoJo called it a “rough experience” that Candace refused to take a photo with her when she was 11.",
            url:"https://www.buzzfeednews.com/article/leylamohammed/candace-cameron-bure-daughter-natasha-jojo-siwa-feud",
            urlToImage:"https://img.buzzfeed.com/buzzfeed-static/static/2022-07/29/14/enhanced/786f65f8bbe8/original-1968-1659106241-7.jpg?crop=1243:651;7,0%26downsize=1250:*",
            publishedAt:"2022-07-29T15:17:25Z",
            content:null
            },
            {
            
            author:"Mia Sato",
            title:"Kylie Jenner can't save Instagram forever - The Verge",
            description:"Even after Instagram head Adam Mosseri walked back some new features, Instagram is looking more and more like TikTok, and it plans to continue down that path.",
            url:"https://www.theverge.com/2022/7/29/23282330/instagram-reels-backlash-tiktok-adam-mosseri",
            urlToImage:"https://cdn.vox-cdn.com/thumbor/rXQM4Qvg1bwIUkwIqprRGZJYpVU=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23904518/VRG_Illo_K_Radtke_STK070_Instagram_1.jpg",
            publishedAt:"2022-07-29T15:02:15Z",
            content:"The company retreated, but Metas plans still stand\r\nIllustration by Kristen Radtke / The Verge\r\nIn early May, the Meta executive in charge of Instagram, Adam Mosseri, shared some news: the social med… [+8461 chars]"
            },
            {
            
            author:"Ethan Alter",
            title:"How B.J. Novak's new thriller 'Vengeance' reveals the 'uncomfortable' history of Six Flags - Yahoo Entertainment",
            description:"The new film from \"The Office\" star teaches viewers about a piece of theme park history that Six Flags would rather forget.",
            url:"https://www.yahoo.com/entertainment/bj-novak-vengeance-six-flags-the-office-ashton-kutcher-150057907.html",
            urlToImage:"https://s.yimg.com/ny/api/res/1.2/70QsfbZR4rsedmJ601.JAQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-07/f64e8cf0-0e7c-11ed-bf3e-f886e1deffbc",
            publishedAt:"2022-07-29T15:00:57Z",
            content:"Midway through B.J. Novak's directorial debut, Vengeance, there's a scene that's guaranteed to inspire gasps and dark laughs from unsuspecting audiences. And the writer-director of the heady new thri… [+15392 chars]"
            },
            {
            
            author:"Aria Gmitter",
            title:"The Daily Horoscope For Each Zodiac Sign On Saturday, July 30, 2022 - YourTango",
            description:"Here's what is in store for each zodiac sign's daily horoscope on Saturday, July 30, 2022 during the Sun in Leo and the Moon in Virgo.",
            url:"https://www.yourtango.com/2022352763/daily-horoscope-each-zodiac-sign-saturday-july-30-2022",
            urlToImage:"https://www.yourtango.com/sites/default/files/styles/listing_big/public/image_blog/daily-horoscope-july-30-2022.jpeg?itok=weS3B6wc",
            publishedAt:"2022-07-29T15:00:45Z",
            content:"Your daily horoscope for July 30, 2022, is here with an astrology forecast for all zodiac signs starting on Saturday. Check out what the stars, the Moon in Virgo, and the Sun in Leo have in store for… [+3931 chars]"
            },
            {
            author:"Andrew Webster",
            title:"Amazon's Paper Girls series takes too long to get fun and weird - The Verge",
            description:"Paper Girls, a live-action adaptation of the comic from Brian K. Vaughan and Cliff Chiang, comes to Amazon Prime Video on July 29th.",
            url:"https://www.theverge.com/23280703/paper-girls-review-amazon-prime-video",
            urlToImage:"https://cdn.vox-cdn.com/thumbor/j4D43kq_oJAEWEbTlx69bpFCMNw=/0x279:3900x2321/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23904251/PRGL_S1_UT_107_210903_PINANJ_00219RC.jpg",
            publishedAt:"2022-07-29T15:00:00Z",
            content:"If you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.It doesnt take long for the Paper Girls comic books to get strange. The series from Brian K. Vaughan … [+6025 chars]"
            },
            {
            author:"Anthony D'Alessandro",
            title:"‘DC League Of Super-Pets’ Takes Off With $2.2M In Previews - Deadline",
            description:"Warner Bros is looking to excite family audiences that have OD’ed on Minions: The Rise of Gru with a new animated movie this weekend, the Dwayne Johnson- and Kevin Hart-voiced DC League of Super-Pets. The pic directed by Jared Stern and Sam Levine made $2.2M …",
            url:"https://deadline.com/2022/07/box-office-dc-league-of-super-pets-dwayne-johnson-kevin-hart-1235081099/",
            urlToImage:"https://deadline.com/wp-content/uploads/2022/07/superpets.jpeg?w=1024",
            publishedAt:"2022-07-29T14:53:00Z",
            content:"Warner Bros is looking to excite family audiences that have OD’ed on Minions: The Rise of Gru with a new animated movie this weekend, the Dwayne Johnson- and Kevin Hart-voiced DC League of Super-Pets… [+2670 chars]"
            },
    ]);

    return(
        <div>
            <section className="section wb">
            <div className="container">
                <div className="row">
                        <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
                        <div className="page-wrapper">
                            <div className="blog-list clearfix">
                                <div className="blog-box row mb-5">
                                    {
                                        data.map((post)=>{
                                            return(
                                                <div>
                                                    <div className="col-md-4">
                                                        <div className="post-media">
                                                            <a href="garden-single.html" title="">
                                                                <img src={post.urlToImage} alt="" className="img-fluid"/>
                                                                <div className="hovereffect"></div>
                                                            </a>
                                                        </div>
                                                        
                                                    </div>
                                                    <div className="blog-meta big-meta col-md-9">
                                                        <span className="bg-aqua"><a href="garden-category.html" title="">Indoor</a></span>
                                                        <h4><a href="." title="">{post.title}</a></h4>
                                                        <p>{post.description}</p>
                                                        <small><a href="garden-single.html" title="">{post.publishedAt}</a></small>
                                                        <small><a href="." title="">{post.author}</a></small>
                                                    </div>
                                                    <hr className="invis"/>

                                                    
                                                </div>
                                            );
                                        })
                                    }
                                    
                                </div>
                                
                            </div>
                        </div>

                        <hr className="invis"/>
                    </div>
                    

                    <div className="col-lg-3 col-md-12 col-sm-12 col-xs-12">
                        <div className="sidebar">
                            <div className="widget">
                                <h2 className="widget-title">Search</h2>
                                <form className="form-inline search-form">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Search on the site"/>
                                    </div>
                                    <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>
                                </form>
                            </div>


                            <div className="widget">
                                <h2 className="widget-title">Popular Categories</h2>
                                <div className="link-widget">
                                    <ul>
                                        <li><a href=".">Gardening <span>(21)</span></a></li>
                                        <li><a href=".">Outdoor Living <span>(15)</span></a></li>
                                        <li><a href=".">Indoor Living <span>(31)</span></a></li>
                                        <li><a href=".">Shopping Guides <span>(22)</span></a></li>
                                        <li><a href=".">Pool Design <span>(66)</span></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
</section>


        </div>
    )
}

export default Home;