import "./widgetcontainer.css";

const WidgetContainer = (props) => {
  return <section className="widget-container">{props.children}</section>;
};

export default WidgetContainer;
