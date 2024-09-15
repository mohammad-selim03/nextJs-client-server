"use client"

const Button = () => {
    const handleSubmit = async() => {
        const response = await fetch("/api/data",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",


            },
            body: JSON.stringify("someting from the front end...")
        });
        console.log("response", await response.json());
       
    }
  return (
    <div>
        <div onClick={handleSubmit}>Click</div>
        <div className="mt-10 ml-96">ss</div>
    </div>
  )
}

export default Button