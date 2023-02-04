import React from 'react';
import css from './introduction.module.css';
import styleable from 'react-styleable';


class Introduction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: '',
      pictures: []
    }

  }

  openModal(url, pictures) {
    this.setState({
      photos: url,
      pictures: pictures
    })

    var modal = document.getElementById('modal');
    var span = document.getElementById('close');

    modal.style.display = 'block';

    span.onclick = function() {
      modal.style.display = 'none';
    }

    window.onclick = function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    }
  }

  showSlides(n) {
    var currentSlide = this.state.photos;
    var currentIndex = this.state.pictures.indexOf(currentSlide);
    var nextIndex = currentIndex + n;
    if (nextIndex >= this.state.pictures.length) {
      var nextSlide = this.state.pictures[0];
      this.setState({
        photos: nextSlide
      });
    } else if (nextIndex < 0) {
      nextSlide = this.state.pictures[this.state.pictures.length - 1];
      this.setState({
        photos: nextSlide
      });
    } else {
      nextSlide = this.state.pictures[nextIndex];
      this.setState({
        photos: nextSlide
      });
    }
  }


  render() {
    const style = this.props.css;
    return (
      <div>
        {this.props.info.map((oneInfo, index) => (
          <div key={index}>
            <div className={style.gridContainer} id={style.photos}>
              <div className={style.pic1}>
                <img className={style.img} src={oneInfo.photos[0]} onClick={() => this.openModal(oneInfo.photos[0], oneInfo.photos)} />
              </div>
              <div className={style.pic2}>
                <img className={style.img} src={oneInfo.photos[4]} onClick={() => this.openModal(oneInfo.photos[4], oneInfo.photos)} />
              </div>
              <div className={style.pic3}>
                <img className={style.img} src={oneInfo.photos[1]} onClick={() => this.openModal(oneInfo.photos[1], oneInfo.photos)} />
              </div>
              <div className={style.pic4}>
                <img className={style.img} src={oneInfo.photos[2]} onClick={() => this.openModal(oneInfo.photos[2], oneInfo.photos)} />
              </div>
              <div className={style.pic5}>
                <img className={style.img} src={oneInfo.photos[3]} onClick={() => this.openModal(oneInfo.photos[3], oneInfo.photos)} />
              </div>
            </div>
            <div className={style.gridContainer2}>
            <h2 className={style.title}>{oneInfo.title}</h2>
            <div className={style.gridContainer3}>
              <i class="fas fa-home"></i>
                <p>Private room in house</p>
              <i class="fas fa-spray-can"></i>
                <p>Sparkling clean</p>
              <i class="fas fa-map-marker-alt"></i>
                <p>Great location</p>
            </div>
            <div className={style.line}></div>
            <p className={style.description}>{oneInfo.description}</p>
            <div className={style.gridContainer4}>
              <div className={style.line}></div>
              <h4>Amenities</h4>
              <i class="fas fa-wifi"></i>
              <p>Wifi</p>
              <i class="fas fa-parking"></i>
              <p>Free parking</p>
              <i class="fas fa-swimming-pool"></i>
              <p>Pool</p>
              <i class="fas fa-tv"></i>
              <p>Cable TV</p>
            </div>
            <div className={style.gridContainer5}>
            <div className={style.line}></div>
              <h4>Sleeping Arrangements</h4>
              <div className={style.gridContainer6}>
              <i class="fas fa-bed"></i>
              <h5>Bedroom 1</h5>
              <p>2 single beds</p>
              </div>
            </div>
            </div>
          </div>
        ))}
        <div className={style.modal} id="modal">
           <span className={style.close} id="close">&times;</span>
           <div className={style.modalContent}>
              <img src={this.state.photos} />
              <a className={style.prev} onClick={() => this.showSlides(-1)}>&#10094;</a>
              <a className={style.next} onClick={() => this.showSlides(1)}>&#10095;</a>
            </div>
        </div>
      </div>
    )
  }
}

export default styleable(css)(Introduction);

export {Introduction};