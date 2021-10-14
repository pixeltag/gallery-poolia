/* eslint-disable import/no-anonymous-default-export */
export default {
  get: () =>
    Promise.resolve({
      data: {
        images: [
          {
            _id: 1,
            title: "What is Lorem Ipsum",
            description:
              "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
            src: "https://via.placeholder.com/200x150.png",
            full: "https://via.placeholder.com/600x450.png",
          },
        ],
      }
    })
};