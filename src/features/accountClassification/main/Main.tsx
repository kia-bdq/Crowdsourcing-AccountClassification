import React, {useEffect} from "react";
import Account from "../account";
import './accountClassification.scss'
import Button from '../Button'
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { setTag, selectTag} from "../accountSlice";
import { userFetchAction } from "../actions";


const Main = () =>{
    const classes = ["سیاسی","ورزشی","خبری","سایر"]
    const tag = useAppSelector(selectTag)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(userFetchAction())
    }, [dispatch])

    return ( 
        <>
            <div className="grayBg">
                <Account />
            </div>
            <div className="buttonContainer">
            <p className="hint">عکس بالا جزو کدام دسته بندی می باشد؟</p>
               {
                   classes.map(c => 
                    <div className="btnWrapper" key={c}>
                         {/* <button onClick={()=> {
                             dispatch(setTag(c))
                             dispatch(userFetchAction())
                        }}>
                            {c}
                        </button> */}
                        <Button onClick={()=> {
                             dispatch(setTag(c))
                             dispatch(userFetchAction())
                        }}
                        >{c}</Button>
                    </div>
                    )
               }
               
               {/* <p>{{</p> */}
            </div>
            <div className="previus">
                {tag && <h4>تگ اکانت قبلی: {tag}</h4>}
            </div>
        </>
    );
}
 
export default Main;