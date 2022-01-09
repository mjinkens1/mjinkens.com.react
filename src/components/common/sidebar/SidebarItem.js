import React from 'react';

export const SidebarItem = ({ children, index, onClick, scrollTarget, sidebarItemIndex }) => {
    return (
        <div
            className={
                index === sidebarItemIndex ? 'sidebar-item sidebar-item-active' : 'sidebar-item'
            }
            onClick={onClick(scrollTarget)}
        >
            {children}
        </div>
    );
};
