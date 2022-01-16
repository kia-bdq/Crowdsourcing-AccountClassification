import React from "react";
import './account.scss'
// import mockAvatar from './../hamrah.jpeg'
import { useAppSelector} from '../../../app/hooks';
import { selectAccount, selectError} from "../accountSlice";
// import Avatar from "react-avatar";


const Account = () => {
    const user = useAppSelector(selectAccount)
    const error =  useAppSelector(selectError)
    return ( 
        <div className="accountWrapper">
            {user &&
            <>
            <img className="avatar" src={user.avatar} alt="avatar"/>

            {/* <Avatar instagramId="lilia_scarf_collection" size="80" round={true}/> */}
            <div className="description">
                <div className="name">{user.name}</div>
                <div className="bio"><p>{user.bio}</p></div>
            </div>
            </>
            }

            { error &&
                <p>{error}</p>
            }
        </div>
     );
}
 
export default Account;