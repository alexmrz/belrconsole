function getBaseRoute(url, ctrl) {
    return {
        templateUrl: url,
        controller: ctrl
    };
}

function Response(status, message, data) {
    this.Status = status ? "success" : "error";
    this.Message = message;
    this.Data = data;
}
