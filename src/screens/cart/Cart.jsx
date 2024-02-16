import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase/firebaseConfig";
import { Typography } from "@material-tailwind/react";
import Card from "../../components/card/Card";

const Cart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getDataFromFirestore() {
      const querySnapshot = await getDocs(collection(db, "cart"));
      const newData = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        const obj = {
          docId: doc.id,
          ...doc.data(),
        };
        newData.push(obj);
        // console.log(obj);
      });
      setData(newData);
    }

    getDataFromFirestore();
  }, []);



  return (
    <div className="flex items-center justify-evenly">
      {data.length > 0 ? (
        data.map((item, index) => {
          return (
            <>
              <Card
                key={index} // Adding a key prop to each mapped item is recommended when using lists in React
                title={item.items.title}
                image={item.items.images}
                price={item.items.price}
              />
            </>
          );
        })
      ) : (
        <Typography variant="h5" color="initial" className="text-center mt-25">
          No item found
        </Typography>
      )}
    </div>
  );
};

export default Cart;
