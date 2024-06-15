import './user-info.css'

const UserInfo = () => {
    return (
        <div className='user-info'>
            <div className='user'>
                <img className='avatar' src="./avatar.webp" alt="avatar" />
                <h3>John Doe</h3>
            </div>
            <div className='icons'>
                <img className='icon' src="./more_horiz.png" alt="more-horiz" />
                <img className='icon' src="./camera.png" alt="camera" />
                <img className='icon' src="./edit.png" alt="edit" />
            </div>
        </div>
    )
}

export default UserInfo;