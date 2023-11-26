import './Card.css';

export default () => {
    return (<div className='card-wrapper'>
        <div className='card'>
            <div className='card-img-frame'>
                <img className='card-img' src="https://images.pexels.com/photos/10049264/pexels-photo-10049264.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800" />
            </div>
            <div className='card-content'>
                <span className='card-content-pill'>
                    100 follows
                </span>
            </div>

        </div>
        <p className='card-lebel'>New English Songs</p>

        </div>
        
    )
}
