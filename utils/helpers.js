module.exports = {
    format_date: date => {
      return date.toLocaleDateString();
    },
    format_amount: amount => {
      return parseInt(amount).toLocaleString();
    },
    editButton: (blogId, blogUser, loggedUser, floating = false) => {
      if (blogUser === loggedUser) {
        return floating 
          ? `<a href="/blogs/edit/${blogId}" class="btn-floating halfway-fab blue"><i class="fas fa-edit fa-small"></i></a>`
          : `<a href="/blogs/edit/${blogId}"><i class="fas fa-edit"></i></a>`;
      }
      return '';
    }
  };
  