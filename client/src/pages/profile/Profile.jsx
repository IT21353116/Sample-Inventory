import "./profile.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from "../../components/navbar/Navbar";
import useFetch from "../../hooks/useFetch";
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {

  const {  dispatch } = useContext(AuthContext);

   const handleResetPasswordClick = () => {
    setResetPasswordVisible(!resetPasswordVisible);
   };

  // Retrieve the stored user object from localStorage
  const storedUser = JSON.parse(localStorage.getItem('user'));

  // Extract the user ID from the stored object
  const userId = storedUser ? storedUser._id : null;
  const {data, loading} = useFetch(`/api/user/${userId}`);
  
  const [resetPasswordVisible, setResetPasswordVisible] = useState(false);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [userInfo, setUserInfo] = useState({});
  const [file,setFile] = useState("");
  const [val,setVal] = useState({});
  const [val2,setVal2] = useState({});

  useEffect(() => {
    if (data) {
      setUserInfo({
        username: data.username,
        mobileNo: data.mobileNo,
        email: data.email,
        imageUrl: data.imageUrl,
      });
    }
  }, [data]);

  const handleFieldChange = (field, value) => {
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [field]: value,
    }));
  };

  const handleUpdateClick = async(e) => {
    e.preventDefault();
    const imgData = new FormData();
    imgData.append("file", file);
    imgData.append("upload_preset", "upload");

    let updatedUser;
    
    try{
       if(file) {
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dtrgqkjzl/image/upload",imgData);
        

            const {url} = uploadRes.data;

            updatedUser = {
                ...userInfo,
                imageUrl: url,
            }
        }else {
             updatedUser = {
              ...userInfo,
            };
        }

       const res = await axios.put(`/api/user/${userId}`, updatedUser);
            setVal({
            status: res.status,
            message: res.data.message,
             })
             console.log(val);
             dispatch( { type: "LOGIN_SUCCESS", payload: res.data.user});
        
    } catch(err){
        setVal({
            status: err.response.data.status,
            message: err.response.data.message,
        })
          
    }

    setTimeout(() => {
        setVal({});
      }, 2000);
    
  };

  const handleChange = async (e) => {
    e.preventDefault();

    try {
        const res = await axios.put(`/api/user/changePassword/${userId}`, {
          password: currentPassword,
          newPassword: newPassword,
        });
    
        setVal2({
            status: res.status,
            message: res.data.message,
             })
             console.log(val);
    
        setCurrentPassword('');
        setNewPassword('');
    
      } catch (err) {
        setVal2({
            status: err.response.data.status,
            message: err.response.data.message,
        })
      }

      setTimeout(() => {
        setVal2({});
      }, 2000);
    

  }
 
  return (
    <div className="profile">
        <Sidebar />
       <div className="profileContainer">
       <Navbar />
        <div className="P-sub-container">
            <div className="card">
                <div className="image-container"> 
                    <img src={file ? URL.createObjectURL(file) : userInfo.imageUrl} alt="User DP"  style={{ objectFit: "cover", objectPosition: "center" }}
                    className="avatar"
                />
                <div className="addicon">
                <label htmlFor="imageUpload" className="addiconbtn">
                Image : <AddPhotoAlternateIcon />
                </label>
                    <input
                    type="file"
                    id="imageUpload"
                    style={{ display: "none" }}
                    onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <div className="form-field-icon-container">   
                <KeyboardDoubleArrowDownIcon className="iconbtn" onClick={handleResetPasswordClick}/>
                </div>
                {resetPasswordVisible && (
                        <div className="reset-password-fields">
                            <input
                            type="password"
                            placeholder="Current Password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            />
                            <input
                            type="password"
                            placeholder="New Password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            />
                            <div className="btns2">
                            <div  className="errmsgholder2"> {val2.status && <span style={{color: val2.status === 200 ? "green" : "rgb(255,0,0)", fontSize: "smaller"}}>{val2.message}</span>}</div> 
                            <button className="reset-password-submit" onClick={handleChange}>
                            Reset
                            </button>
                            </div>
                        </div>
                )}
                </div>
                <div className="info">
                    <div className="item">
                        <label>Username : </label>
                        <div className="inputContainer">
                            <SupervisorAccountOutlinedIcon className="icon"/>
                            <input type="text" value={userInfo.username} onChange={(e) => handleFieldChange('username', e.target.value)}/>
                        </div> 
                    </div>
                    <div className="item">
                        <label>Email : </label>
                        <div  className="inputContainer">
                            <MailOutlinedIcon className="icon"/>
                            <input type="text" value={userInfo.email} onChange={(e) => handleFieldChange('email', e.target.value)}/>
                        </div>
                    </div>
                    <div className="item">
                        <label>Phone Number: </label>
                        <div className="inputContainer">
                            <PhoneAndroidOutlinedIcon className="icon"/>
                            <input type="text" value={userInfo.mobileNo} onChange={(e) => handleFieldChange('mobileNo', e.target.value)}/>
                        </div>
                    </div>
                    <div className="btns">
                    <div className="errmsgholder">{val.status && <span style={{color: val.status === 200 ? "green" : "rgb(255,0,0)", fontSize: "smaller"}}>{val.message}</span>}</div>
                    <button className="btn" onClick={handleUpdateClick} disabled={loading}>Update</button>
                   
                    </div>
                  
                </div>
            </div>
        </div>
       </div>
    </div>
  )
}

export default Profile;