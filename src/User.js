import axios from "axios"
import{ useState } from "react"
import img10 from'./image/image11.jpg'
import Swal from "sweetalert2"
export default function User(){
const [name, setname] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');
const [adress, setAdress] = useState('');
const [quantity, setQuantity] = useState(1); 
const unitPrice = 298;
const totalPrice = unitPrice * quantity;
    const submit = (e) => {
        e.preventDefault();
        const data = {
            Name : name,
            Phone :phoneNumber,
            Address :adress,
            Quantity: quantity 
        }
        axios.post('https://sheet.best/api/sheets/95000237-7590-4bf2-a97e-a89128fbef2a', data).then((response) => console.log(response)).catch((err) => console.log(err));
        setname('');
        setPhoneNumber('');
        setAdress('');
        setQuantity('');
        Swal.fire({
            position: "top-middle",
            icon: "success",
            title: "Good Gob ",
            text: ``,
            showConfirmButton: false,
            timer: 1500
          });
        
       
    }

return(
    <>
    <div style={{padding:"45px"}} className="space hero" id="hero"></div>
    <div className="user">
        <div className="container">
            <div style={{alignItems:'center'}} className="row">
                <div className="col-12 col-md-12 col-lg-6 hero" id="hero">
                <form  onSubmit={submit}>
                <label>اسمك بالكامل</label>
                <input type='text' onChange={(e => setname(e.target.value))} value={name} required/>
                <label>رقم الهاتف</label>
                <input required type='text' onChange={(e => setPhoneNumber(e.target.value))} value={phoneNumber}/>
                <label >العنوان بالتفصيل</label>
                <textarea
        value={adress}
        onChange={(e => setAdress(e.target.value))}
        rows={3} // adjust the number of visible rows as needed
        cols={50} // adjust the number of visible columns as needed  
        required
      />
                <label>الكمية</label>
                  <input type='number' min="1" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} />
                  <div className="salary">
                    <p style={{fontWeight:'600'}}> سعر المنتج</p>
                    <p style={{fontWeight:"600"}}>298 ج.م</p>
                </div>
                <div className="salary">
                    <p style={{fontWeight:'600'}}>تكلفة الشحن</p>
                    <p style={{fontWeight:"600"}}>50 ج.م</p>
                </div>
                <div className="salary">
                <p style={{marginTop:"-8px", fontWeight:"600"}}> الاجمالي
                </p>
                <p  style={{fontWeight:"bold"}}>{totalPrice +50} ج.م</p>
                </div>
                
                <button type='submit' id="line" className="button btn btn-dark">اضغط هنا للشراء</button>
                </form>        
                </div>
                <div className="col-6 SconedRow">
                <div className="photo">
                <img style={{width:'100%'}} src={img10} alt=""/>
                </div>
                </div>
            </div>
        </div>
    </div>
    </>
)
};