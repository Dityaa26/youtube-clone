const commentData = [
  {
    name: "Aditya",
    text: "Lorem ipsum dolor sit amet.",
    replies: [
      {
        name: "manu",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta dictum posuere. Fusce vitae dolor quis eros facilisis dapibus. Nullam.",
      },
    ],
  },
  {
    name: "Naruto",
    text: "Lorem ipsum dolor sit amet.",
    replies: [
      {
        name: "manu",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta dictum posuere. Fusce vitae dolor quis eros facilisis dapibus. Nullam.",
      },
      {
        name: "Rocklee",
        text: "Quisque porta dictum posuere. Fusce vitae dolor quis eros facilisis dapibus. Nullam.",
        replies: [
          {
            name: "manu",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta dictum posuere. Fusce vitae dolor quis eros facilisis dapibus. Nullam.",
          },
          {
            name: "Rocklee",
            text: "Quisque porta dictum posuere. Fusce vitae dolor quis eros facilisis dapibus. Nullam.",
            replies: [
              {
                name: "manu",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta dictum posuere. Fusce vitae dolor quis eros facilisis dapibus. Nullam.",
              },
              {
                name: "Rocklee",
                text: "Quisque porta dictum posuere. Fusce vitae dolor quis eros facilisis dapibus. Nullam.",
                replies: [
                  {
                    name: "manu",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta dictum posuere. Fusce vitae dolor quis eros facilisis dapibus. Nullam.",
                  },
                  {
                    name: "Rocklee",
                    text: "Quisque porta dictum posuere. Fusce vitae dolor quis eros facilisis dapibus. Nullam.",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Sasuke",
    text: "Lorem ipsum dolor sit amet.",
    replies: [
      {
        name: "manu",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta dictum posuere. Fusce vitae dolor quis eros facilisis dapibus. Nullam.",
      },
    ],
  },
];

const Comment = ({ data, bgColor = "bg-gray-200" }) => {
  const { name, text, replies } = data;

  return (
    <div className={"flex bg-gray-200 mr-6 rounded-md p-2 mb-1 " + bgColor}>
      <img
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="User Icon"
        className="h-[30px] mr-2"
      />
      <div>
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="font-md">{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({comments}) => {
    return comments?.map((comment, index) => (
      <div key={index}>
        <Comment data={comment} />
        <div className="pl-4 border-l-2 border-black">
          <CommentsList comments={comment?.replies} />
        </div>
      </div>
    ));
}

const CommentsContainer = () => {
  return (
    <div className="my-5 p-2">
        <h1 className="text-2xl font-bold mb-4">Comments:</h1>
        <CommentsList comments={commentData} />
    </div>
  )
}

export default CommentsContainer