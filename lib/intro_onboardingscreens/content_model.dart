class UnbordingContent {
  String image;
  String title;
  String description;

  UnbordingContent({required this.image, required this.title, required this.description});
}

List<UnbordingContent> contents = [
  UnbordingContent(
      title: 'Choose your favourite restaurant',
      image: 'images/quality.svg',
      description: 'simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the '
          "industry's standard dummy text ever since the 1500s, "
          "when an unknown printer took a galley of type and scrambled it "
  ),
  UnbordingContent(
      title: 'Order what you crave',
      image: 'images/reward.svg',
      description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the "
          "industry's standard dummy text ever since the 1500s, "
          "when an unknown printer took a galley of type and scrambled it "
  ),
  UnbordingContent(
      title: '30 mins delivery',
      image: 'images/delivery.svg',
      description: "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the "
          "industry's standard dummy text ever since the 1500s, "
          "when an unknown printer took a galley of type and scrambled it "
  )
];