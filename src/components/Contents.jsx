
function Contents() {
  const contentsThumbnails = [
    {
      id: 1,
      contentName: "App A",
    },
    {
      id: 2,
      contentName: "App B",
    },
    {
      id: 3,
      contentName: "App C",
    },
  ];

  return (
    <div>
      <ul className="flex justify-around">
        {contentsThumbnails.map((contentsThumbnail) => (
          <li key={contentsThumbnail.id}>{contentsThumbnail.contentName}</li>
        ))}
      </ul>
    </div>
  );
}

export default Contents;
