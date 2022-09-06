import React from 'react'

const Videos = () => {
  return (
    <div class='container my-4'>
    <form class="d-flex" method='post' action=''>
        <input class="form-control me-2" name='searchFor' type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    <h5 class="my-4"><b>text</b></h5>
    <div class="row text-center">
        <div class="col-12 col-md-4 my-4">
            <h4>video title</h4>
            <div class="embed-responsive embed-responsive-16by9">
                <iframe  src="{{video.link}}" allowfullscreen></iframe>
            </div>
        </div>
    </div> 
</div>
  )
}

export default Videos