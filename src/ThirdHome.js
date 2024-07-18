import image from './image/image2.png'
import img3 from'./image/image3.jpg'
import img4 from'./image/image4.jpg'
import img5 from'./image/image5.jpg'
import img6 from'./image/image6.jpg'
import img7 from'./image/image7.jpg'
import img8 from'./image/image8.jpg'
import img9 from'./image/image9.jpg'
import img10 from'./image/image11.jpg'


export default function ThirdHome(){

    return(
        <>
        <div className="section">
            <div className="container">
                
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-4 mb-5">
                            <img style={{width:'100%'}} src={image} alt=""/>
                            <div className='info'><p>حمض الهيالورونيك (hyaluronic acid): يعمل على ترطيب بشرتك بعمق ويساعد على تعزيز مرونتها ومقاومة الجفاف.
                            </p></div>
                            
                    
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 mb-5">
                        <img style={{width:'100%'}} src={img3} alt=""/>
                        <div className='info'> <p>النياسيناميد (niacinamide): هو فيتامين ب٣ الذى يساعد على ترطيب بشرتك وحمايتها من العوامل البيئية وتقليل الاحمرار والالتهاب كما يساعد على تفتيحها وتقليل التصبغات.
                        </p></div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 mb-5">
                        <img style={{width:'100%'}} src={img4} alt=""/>
                        <div className='info'><p>زيت بذور العنب (grapeseed oil): يساعد على تنعيم بشرتك وترطيبها، وتوحيد لونها.
                        </p></div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 mb-5">
                        <img style={{width:'100%'}} src={img5} alt=""/>
                        <div className='info'><p>زبدة الشيا (Shea butter): تمد بشرتك بالأحماض الدهنية التي تغذيها وترطبها.
                        </p></div>
                            
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 mb-5">
                        <img style={{width:'100%'}} src={img6} alt=""/>
                        <div className='info'><p>فيتامين هـ (vitamin E): يعمل كمضاد للأكسدة يحمي البشرة من عوامل التلف الداخلية والخارجية، ويقاوم تقدمها في العمر.
                        </p></div>
                            
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 mb-5">
                        <img style={{width:'100%'}} src={img7} alt=""/>
                        <div className='info'> <p>السيراميد (ceramide): مرطب قوي للبشرة، يخترق الخلايا، ويترك طبقة على الجسم من الخارج تحافظ على الترطيب.
                        </p></div>
                       
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 mb-5">
                        <img style={{width:'100%'}} src={img8} alt=""/>
                        <div className='info'>
                            <p> ستشعرين أن اللوشن يكسب بشرتك نعومة وترطيبًا جيداً، ومع الاستخدام المنتظم المستمر ستلاحظين أن بشرتك أصبحت أقل جفافًا</p>
                            </div>
                            
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 mb-5">
                        <img style={{width:'100%'}} src={img9} alt=""/>
                        <div className='info'> <p>حمض الهيالورونيك (hyaluronic acid): يعمل على ترطيب بشرتك بعمق ويساعد على تعزيز مرونتها ومقاومة الجفاف.
                        </p></div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 mb-5">
                        <img style={{width:'100%'}} src={img10} alt=""/>
                        <div className='info'> <p>حمض الهيالورونيك (hyaluronic acid): يعمل على ترطيب بشرتك بعمق ويساعد على تعزيز مرونتها ومقاومة الجفاف.
                        </p></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};