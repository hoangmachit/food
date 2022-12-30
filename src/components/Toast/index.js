const Toast = (props) => {
    const { closeToast } = props;
    return (
        <>
            <div className="toast-fixed">
                <div className="toast-container position-absolute top-0 left-0">
                    <div className="toast show" role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="toast-header">
                            <strong className="me-auto">Orders</strong>
                            <small className="text-muted">just now</small>
                            <button type="button" onClick={() => closeToast()} className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                        </div>
                        <div className="toast-body">
                            Add food successfully !!!
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Toast;