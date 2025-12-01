'use client';

export function CargarImagen(img) {
    return (
        <div>
            <img src={img.url}  style={{ padding: 20, maxWidth: '100%', height: 'auto' }} />
        </div>
    );
}