// https://medium.com/@AndrewCernek/coding-simple-data-views-with-underscore-js-templates-c6fa41fba099

var MessageView = {

  render: _.template('<div class="chat"><p class="username <%- username %>"><%- username %></p><p><%- message %></p> </div>')
};