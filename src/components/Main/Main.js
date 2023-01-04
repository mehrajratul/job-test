import React, { useState } from 'react';
const Main = () => {
    const [val, setVal] = useState('')
    const [nam, setNam] = useState('')
    const [show, setShow] = useState(false)
    const Data = ["Menufacturing","Construction materials","Electronics and Optics","Food and Beverage","confectionery products","Beverages","fish products","meat products","dairy products","Other","snack food","Furniture","Bathroom/sauna","Bedroom", "Childrens Room","Kitchen","Living Room","Office","Other","Outdoor Project" ,"Furniture","Machinery","Machinery components","Machinery Equipments","Manufacture of machinery","Maritime","Aluminium and steel workboats","Boat/Yacht building","Boat/Yacht building","Metal structures","Other","Repair and maintenance service","MetalWorking","Construction of metal structures","Houses and buildings","Metal products","Metal works","CNC-machining","Forgings, Fasteners","Gas, Plasma, Laser cutting","MIG, TIG, Aluminum welding","Plastic and Rubber","Packaging","Plastic goods","Plastic processing technology","Blowing","Moulding","Plastics welding and processing","Plastic profiles","Printing","Advertising","Book/Periodicals printing","Labelling and packaging printing","Textile and Clothing","Clothing","Textile","Wood","Other (Wood)","Wooden building materials","Wooden houses","Other","Creative industries","Energy technology","Environment","Service","Business services" ,"Engineering" ,"Information Technology and Telecommunications","Data processing, Web portals, E-marketing","Programming, Consultancy","Software", "Transport and Logistics","Air","Rail","Road","Water"];
   
    console.log(Data);    
    return (
        <>
            <div>
                <h5>Name : </h5><input value={nam} onChange = {e => setNam(e.target.value)} type="text" name="" id="" />
            </div>
            <br />
            <div>
                <h5>Sectors : </h5><select value={val} onChange={e => setVal(e.target.value)}>
                {
                        Data.map(opt => <option>{opt}</option>)        
                }    
                </select>
            </div>
                <br /><br />
                <input type="checkbox" name="terms" id="" /> Agree to terms
                <br /><br />
            <button className="btn btn-primary" onClick={() => setShow(!show)}>Save</button>
                <br /><br /><br />
          {show  &&  <div>
                <p>Name : {nam}</p>
                <p>Sector : {val}</p>
            </div>} 
        </>
    );
};

export default Main;