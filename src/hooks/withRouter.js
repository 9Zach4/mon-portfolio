import { useLocation, useNavigate, useParams } from 'react-router-dom';

function withRouter(Component) {
  function ComponentWithRouterProp(props) { 
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return ( // router props
      <Component
        {...props}
        location={location}
        params={params}
        navigate={navigate}
      />
    );
  }

  return ComponentWithRouterProp;
}

export default withRouter;