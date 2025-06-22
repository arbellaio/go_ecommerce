const TodoList = () => {
    return (
        <>
            <div className="col-xxl-4 col-md-6">
                <div className="card o-hidden card-hover">
                    <div className="card-header border-0">
                        <div className="card-header-title">
                            <h4>To Do List</h4>
                        </div>
                    </div>

                    <div className="card-body pt-0">
                        <ul className="to-do-list">
                            <li className="to-do-item">
                                <div className="form-check user-checkbox">
                                    <input className="checkbox_animated check-it" type="checkbox" value="" id="flexCheckDefault" data-bs-original-title="" title=""/>
                                </div>
                                <div className="to-do-list-name">
                                    <strong>Pick up kids from school</strong>
                                    <p>8 Hours</p>
                                </div>
                            </li>
                            <li className="to-do-item">
                                <div className="form-check user-checkbox">
                                    <input className="checkbox_animated check-it" type="checkbox" value="" id="flexCheckDefault1" data-bs-original-title="" title=""/>
                                </div>
                                <div className="to-do-list-name">
                                    <strong>Prepare or presentation.</strong>
                                    <p>8 Hours</p>
                                </div>
                            </li>
                            <li className="to-do-item">
                                <div className="form-check user-checkbox">
                                    <input className="checkbox_animated check-it" type="checkbox" value="" id="flexCheckDefault2" data-bs-original-title="" title=""/>
                                </div>
                                <div className="to-do-list-name">
                                    <strong>Create invoice</strong>
                                    <p>8 Hours</p>
                                </div>
                            </li>
                            <li className="to-do-item">
                                <div className="form-check user-checkbox">
                                    <input className="checkbox_animated check-it" type="checkbox" value="" id="flexCheckDefault3" data-bs-original-title="" title=""/>
                                </div>
                                <div className="to-do-list-name">
                                    <strong>Meeting with Alisa</strong>
                                    <p>8 Hours</p>
                                </div>
                            </li>

                            <li className="to-do-item">
                                <form className="row g-2">
                                    <div className="col-8">
                                        <input type="text" className="form-control" id="name" placeholder="Enter Task Name" data-bs-original-title="" title=""/>
                                    </div>
                                    <div className="col-4">
                                        <button type="submit" className="btn btn-primary w-100 h-100" data-bs-original-title="" title="">Add
                                            task</button>
                                    </div>
                                </form>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoList
