import Link from 'next/link'

const EventItem = (props) => {
    const {title, image, date, location, id} = props;
    const theDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    const theAddress = location.replace(', ', '\n');//replaced ', ' for /n (line break)
    const exploreLink = `/events/${id}`;
    return(
        <li>
            <img src={'/' + image} alt={title}/>
            <div>
                <div>
                    <h2>{title}</h2>
                    <div>
                        <time>{theDate}</time>
                    </div>
                    <div>
                        <address>{theAddress}</address>
                    </div>
                </div>
                <div>
                    <Link href={exploreLink}>Explore Event</Link>
                </div>
            </div>
        </li>
    );
}

export default EventItem;