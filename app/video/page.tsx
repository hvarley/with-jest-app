
import Video from "./video";

export const metadata = {
    title: "View Video Page",
  };
  
  export default function Page() {
    const rentalData = [
        {
            id: 1,
            days: 1,
        },
        {
            id: 2,
            days: 2,
        },
        {
            id: 3,
            days: 3,
        },
    ]
    return (
        <>
            <h1>Video Page</h1>
            <Video 
                customer="Joe Bloggs" 
                customerRentals={rentalData}
            />
        </>
    );
  }