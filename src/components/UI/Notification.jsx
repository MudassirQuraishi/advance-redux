/* eslint-disable react/prop-types */
import classes from './Notification.module.css';

const Notification = (props) => {
    let statusClass = '';

    if (props.status === 'error') {
        statusClass = classes.error;
    }
    if (props.status === 'success') {
        statusClass = classes.success;
    }

    const cssClasses = `${classes.notification} ${statusClass}`;

    return (
        <section className={cssClasses}>
            <h2>{props.title}</h2>
            <p>{props.message}</p>
        </section>
    );
};

export default Notification;