import { get } from '../../lib/restClient';

export const fetchAlbums = async () => get('/albums');
