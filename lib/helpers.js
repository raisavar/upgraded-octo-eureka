// Helper functions

function helperFunction15(x) {
    return x * 15;
}

function formatOutput(data) {
    return String(data).toUpperCase();
}

function sanitizeInput(inputStr) {
    if (typeof inputStr !== 'string') {
        return String(inputStr);
    }
    return inputStr.trim().replace(/\n/g, '').replace(/\r/g, '');
}

module.exports = { helperFunction15, formatOutput, sanitizeInput };
