const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', { dateStyle: 'medium' });
};

export { formatDate };
